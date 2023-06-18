---
title: "Big network and small network"
date: 2023-01-04T19:54:01+01:00
draft: false
lastmod: 2023-01-07T19:54:01+01:00
---

Training of neural networks trough variants of gradient descent using backpropagation often requires large datasets and a lot of computational power to get good results.

While it's intuitive that a lot of examples will define , it is often possible for humans to find a pattern given not many samples. Indeed, large neural networks can also perform few-shot learning.

In this article I suggest a simple idea. The purpose is to reduce the amount of examples and computational power needed to train a neural network. I have no idea whether this can actually work in practice and it's intuitive enough that I expect many people, maybe even most of those dealing with neural network, to have thought about it before. Still, I think putting it in writing can be useful for discussing it.

## The basic idea

The basic idea is to have a system composed of a *big network* and a *small network*.

The *big network*, as the name would suggest, is significantly larger. Given a few examples for a new task as input, the *big network* produces the weights of the *small network* as output. That is the whole training process for the *small network*.

The *small network*, then, is the one actually used during inference to actually perform the task.

This solution comes at the cost of having to train the large network to being with. Additionally, the whole architecture of the *small network*, including the shape of its inputs and outputs, would be fixed.

## The problem

Supervised learning can be thought of as observing several examples of a random *feature* vector associated with a *target* vector and learning to predict the value of the target vector from the feature vector: that of performing this mapping is the *task*.

Consider now, a large populations of tasks $T$, each sharing the same length of feature vector $m$, length of target vector $n$ and possibly some other interesting characteristic, while still being radically different from each other.

*Small network* is a neural architecture that we can expect to give good results when trained trough supervised learning on a task selected from $T$.

*Big network* is a neural architecture which has an input vector of length $k \cdot (n + m)$ and an output vector of length equal to the number of internal parameters in *small network*.

The *metatask* of *big network* is to produce good internal parameters for *small network* for a generic task $T_l$ given (as input to *big network*) $k$ randomly selected examples of $T_l$.

Each task $T_l$ can be assumed to be described by a dataset of $d$ example pairs. We should assume that $d \gg k$.

Attempting supervised learning trough gradient descent on *big network* trough standard gradient descent using back propagation would not work. One would first need to train *small network* several times, thereby building examples for the metatask. However, in the simplest implementation of this, *big network* would, during inference, interpolate different possible vector of internal parameters, all of which would make *small network* equally good at the task, but the average of which would be meaningless.

The solution that I suggest is that each training step should be as follows:
- A random task $T_l$ is selected.
- $d$ random examples $s1 \ldots s_k$ are selected from $T_l$.
- Another example $(x, y)$, different from the others, is also selected from $T_l$.
- Examples $s1 \ldots s_k$ are combined to produce the input vector for *big network*.
- The output vector of *big network* determines the internal parameters of *small network*.
- *Small network* receives the feature vector $x$ and produces an output vector.
- The loss of the whole architecture for this training step is the distance between the output of *small network* and the target vector $y$.

This would bias the architecture towards specific weights for *small network*, rather than a centroid of multiple trainings because it will optimize for the performance of *small network*.

From the point of view of the learning algorithm, only the internal parameters of *big network* are being trained, while those of *small network* only exist as internal values during the computation.

The architecture can be trained in the standard way. Each sample has a feature vector which contains $s1 \ldots s_k$ as well as $x$ and a target vector which is $y$.

Once the training is complete, *big network* can be extracted from the larger architecture and it will simply perform the metatask of predicting the internal parameters of *small network* given $s1 \ldots s_k$. Performing this prediction also constitutes the training for *small network*, which will require only $k$ examples and be computationally quicker.

## Details

*Big network* should have an architecture such that the order of the $k$ samples of the task it receives is irrelevant.

The architecture should be build such that the initial outputs of *big network* are close to the range of weights that a good initializer would give to *small network*.

## Mathematical description

The description of the *big network* and *small network* system given above is rather purposefully informal, to make it simpler and more intuitive. While a fully formal description is outside the scope of this article and may require more details to be specified, some more mathematical rigour could help to understand this idea better.

Given that some potential tasks are more likely than others to be the ones we are focusing on (or we may care more about those tasks), that which I previously described as a "population of tasks" should be rather described as a probability distribution over possible tasks. Thus, let's consider a random variable $t$ over a set of tasks $T$, which indicates a selected task.

We can define a generic random feature vector $x$ as a random variable over $\mathbb{R}^m$. $x$ will be dependent on $t$. Likewise, the target vector $y$ is a random variable over $\mathbb{R}^n$ which depends on both $t$ and $x$. A generic sample is represented by a random variable $s$, defined as $(x,y)$: it will therefore depend on $x$ and $y$.

We can describe a neural architecture as a function which, given a vector of *internal parameters* and an input feature vector, produces an estimate of a target vector, each with a specific length. These functions also have some other properties that are omitted here and which will be known to those familiar with neural networks. *Small network* is a function $small\_network: \mathbb{R}^i \times \mathbb{R}^m \to \mathbb{R}^n$, while *big network* is a function $big\_network: \mathbb{R}^j \times ((\mathbb{R}^m \times \mathbb{R}^n)^k \times \mathbb{R}^m) \to \mathbb{R}^i$, where $i$ and $j$ are the amounts of internal parameters for *small network* and *big network* respectively

Describing the functions for neural architectures such that the vector of parameters is the first of its arguments allows for *currying* and the curried function corresponds to a trained model. The notation I will use to refer to the application of the architecture $a$ over an input feature vector $u$ using parameters $\Pi$ can be written as either $a(\Pi, u)$ or $a(\Pi)(u)$. However, I will use the different notation $a(u \mid \Pi)$, which has the same meaning.

Suppose that a distance function $dist$ is defined. The loss of the *small network* architecture with weights $\Pi\_{small}$ is a random variable which depends on the selected task $t$ and the selected sample $s = (x,y)$. Assuming that the objective of *small network* is to minimize the distance of the predicted target vector with the real one, it can be defined as:

$$loss_{small}(\Pi_{small}) = dist(small\_network(x \mid \Pi_{small}), y)$$

The loss for the metatask is the loss that *small network* will have using the weights generated by *big network* to solve the task as described by the randomly selected examples $s_1 \ldots s_k$:

$$loss_{big}(\Pi_{big}) = loss_{small}(big\_network(s_1 \ldots s_k \mid \Pi_{big}))$$

This gives us the equation to compute the loss for each step during the actual training process:

$$loss_{big}(\Pi_{big}) = dist(small\_network(x \mid loss_{small}(big\_network(s_1 \ldots s_k \mid \Pi_{big}))), y)$$

The overall loss of *small network* with weights $\Pi_{small}$ is a random variable that depends on a specific selected task $t$ and is given by the function:

$$Loss_{small}(\Pi_{small}) = \mathbf{E}[loss_{small}(\Pi_{small}) \mid t]$$
$$Loss_{small}(\Pi_{small}) = \mathbf{E}[dist(small\_network(x \mid \Pi_{small}), y) \mid t]$$

The overall loss for *big network* with weights $\Pi_{big}$ is a real value, not a random variable, given by the function:

$$Loss_{big}(\Pi_{big}) = \mathbf{E}[loss_{big}(\Pi_{big})]$$
$$Loss_{big}(\Pi_{big}) = \mathbf{E}[loss_{small}(big\_network(s_1 \ldots s_k \mid \Pi_{big}))]$$
$$Loss_{big}(\Pi_{big}) = \mathbf{E}[\mathbf{E}[loss_{small}(big\_network(s_1 \ldots s_k \mid \Pi_{big})) \mid t]]$$
$$Loss_{big}(\Pi_{big}) = \mathbf{E}[Loss_{small}(big\_network(s_1 \ldots s_k \mid \Pi_{big}))]$$

The purpose of the training process is that of minimizing $Loss_{big}$ by finding an optimal value of its internal parameters $\Pi_{big}$. It achieves this goal by performing stochastic gradient descent, using backpropagation, on $loss_{big}$: at each step of the computation all random variables are selected according to their interdependent distributions and are concrete. $loss_{big}$ will be described by a function in $\Pi_{big}$ and specific values for $s=(x,y)$ and $s1 \ldots s2$, which are generated (trough extractions from a dataset) after having randomly selected a specific task $t$ for that step.
