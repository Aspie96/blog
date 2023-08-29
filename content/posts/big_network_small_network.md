---
title: "Big network and small network"
date: 2023-01-04T19:54:01+01:00
draft: true
lastmod: 2023-01-07T19:54:01+01:00
---

Training of neural networks trough variants of gradient descent using backpropagation often requires large datasets and a lot of computational power to get good results.

While it's intuitive that a lot of examples will do a good job at defining a task, it is often possible for humans to find a pattern given just a few instances. Indeed, large neural networks can also perform few-shot learning.

In this article I suggest a simple idea. The purpose is to reduce the amount of examples and computational power needed to train a neural network. I have no idea whether this can actually work in practice and it's intuitive enough that I expect many people to have thought about it before. Still, I think putting it in writing can be useful for discussing it.

## The basic idea

The basic idea is to have a system composed of a *big network* and a *small network*.

*Big network*, as the name would suggest, is significantly larger. Given a few examples for a new task as input, *big network* produces the internal parameters of *small network* as output. That is the whole training process for the *small network*. *Small network*, then, is the one actually used during inference to solve the task.

This solution comes at the cost of having to train *big network* to being with. Additionally, the whole architecture of *small network*, including the shape of its inputs and outputs, is fixed.

## The problem

Supervised learning can be thought of as observing several examples of a random *feature* vector associated with a *target* vector and learning to predict the value of the target vector from the feature vector: that of performing this mapping is the *task*.

Consider now, a large populations of tasks $T$, each sharing the same length of feature vector $m$, length of target vector $n$ and possibly some other interesting characteristic, while still being radically different from each other.

*Small network* is a neural architecture that we can expect to give good results on any task selected from $T$ when trained for that task.

*Big network* is a neural architecture which has an input vector of length $k \cdot (n + m)$ and an output vector of length equal to the number of internal parameters in *small network*. The *metatask* of *big network* is to produce good internal parameters for *small network* for a generic task $T_l$ given $k$ randomly selected examples of $T_l$.

Each task $T_l$ can be assumed to be described by a dataset of $d$ example pairs. We should assume that $d \gg k$.

Attempting supervised learning trough gradient descent on *big network* trough standard gradient descent using back propagation would not work. One would first need to train *small network* several times, thereby building examples for the metatask. However, in the simplest implementation of this, *big network* would, during inference, interpolate different possible vector of internal parameters, all of which would make *small network* equally good at the task, but the average of which would be meaningless.

The solution that I suggest is that each training step should be as follows:
- A random task $T_l$ is selected.
- $k$ random examples $s1 \ldots s_k$ are selected from $T_l$.
- Another example $(x, y)$, different from the others, is also selected from $T_l$.
- Examples $s1 \ldots s_k$ are combined to produce the input vector for *big network*.
- The output vector of *big network* determines the internal parameters of *small network*.
- *Small network* receives the feature vector $x$ and produces an output vector.
- The loss of the whole architecture for this training step is the distance between the output of *small network* and the target vector $y$.

This would bias the architecture towards specific weights for *small network*, rather than a centroid of multiple trainings because it will optimize for the performance of *small network*.

From the point of view of the learning algorithm, only the internal parameters of *big network* are being trained, while those of *small network* only exist as internal values during the computation.

The architecture can be trained in the standard way, mapping a vector which contains $s1 \ldots s_k$ as well as $x$ to a target vector $y$.

Once the training is complete, *big network* can be extracted from the larger architecture and it will simply perform the metatask of predicting the internal parameters of *small network* given $s1 \ldots s_k$. Performing this prediction also constitutes the training for *small network*, which will require only $k$ examples and be computationally quicker.

## Details

*Big network* should have an architecture such that the order of the $k$ samples of the task it receives is irrelevant.

The architecture should be build such that the initial outputs of *big network* are close to the range of weights that a good initializer would give to *small network*.

## Mathematical description

The description of the *big network* and *small network* system given above is rather purposefully informal, to make it simpler and more intuitive. While a fully formal description is outside the scope of this article and may require more details to be specified, a somewhat more mathematical description, even if not completely rigorous, could help to understand this idea better.

Given that some potential tasks are more likely than others to be the ones we are focusing on (or we may care more about those tasks), that which I previously described as a "population of tasks" should be rather described as a probability distribution over possible tasks. Thus, let's consider a random variable $t$ over a set of tasks $T$, which indicates a selected task.

We can define a generic random feature vector $x$ as a random variable over $\mathbb{R}^m$. $x$ will be dependent on $t$. Likewise, the target vector $y$ is a random variable over $\mathbb{R}^n$ which depends on $t$ and $x$. The $k+1$ random variables $s$ and $s_1 \ldots s_k$ are conditionally independent and identically distributed given $t$. $s$ is defined as $(x,y)$.

We can describe a neural architecture as a function which, given a vector of *internal parameters* and an input feature vector, produces an estimate of a target vector, each with a specific length. These functions also have some other properties that are omitted here and which will be known to those familiar with neural networks. *Small network* is a function $small\_network\colon \mathbb{R}^i \times \mathbb{R}^m \to \mathbb{R}^n$, while *big network* is a function $big\_network\colon \mathbb{R}^j \times \mathbb{R}^{(m+n) \cdot k} \to \mathbb{R}^i$, where $i$ and $j$ are the amounts of internal parameters for *small network* and *big network* respectively.

Describing the functions for neural architectures such that the vector of parameters is the first of its arguments allows for *currying* and the curried function corresponds to a trained model. The result of the application of the architecture $a$ to an input vector $u$ using parameters $\Pi$ can be written as either $a(\Pi, u)$ or $a(\Pi)(u)$. However, I will use the different notation $a(u \mid \Pi)$, which has the same meaning.

Suppose that a distance function $dist$ is defined. The loss of the *small network* architecture with weights $\Pi_{small}$ is a random variable which depends on the selected task $t$ and the selected sample $s = (x,y)$. Assuming that the objective of *small network* is to minimize the distance between the predicted target vector and $y$, it can be defined as:

$$loss_{small}(\Pi_{small}) = dist(small\_network(x \mid \Pi_{small}), y)$$

The loss for the metatask is the loss that *small network* will have using the weights generated by *big network* to solve the task as described by the randomly selected examples $s_1 \ldots s_k$:

$$loss_{big}(\Pi_{big}) = loss_{small}(big\_network(s_1 \ldots s_k \mid \Pi_{big}))$$

This gives us the equation to compute the loss for each step during the actual training process:

$$loss_{big}(\Pi_{big}) = dist(small\_network(x \mid loss_{small}(big\_network(s_1 \ldots s_k \mid \Pi_{big}))), y)$$

The overall loss of *small network* with weights $\Pi_{small}$ is a random variable that depends on the specific selected task $t$ and is given by the function:

$$Loss_{small}(\Pi_{small}) = \mathbf{E}[loss_{small}(\Pi_{small}) \mid t]$$
$$Loss_{small}(\Pi_{small}) = \mathbf{E}[dist(small\_network(x \mid \Pi_{small}), y) \mid t]$$

The overall loss for *big network* with weights $\Pi_{big}$ is not a random variable and is given by the function:

$$Loss_{big}(\Pi_{big}) = \mathbf{E}[loss_{big}(\Pi_{big})]$$
$$Loss_{big}(\Pi_{big}) = \mathbf{E}[loss_{small}(big\_network(s_1 \ldots s_k \mid \Pi_{big}))]$$
$$Loss_{big}(\Pi_{big}) = \mathbf{E}[\mathbf{E}[loss_{small}(big\_network(s_1 \ldots s_k \mid \Pi_{big})) \mid t]]$$
$$Loss_{big}(\Pi_{big}) = \mathbf{E}[Loss_{small}(big\_network(s_1 \ldots s_k \mid \Pi_{big}))]$$

The purpose of the training process is that of minimizing $Loss_{big}$ by finding an optimal value of its internal parameters $\Pi_{big}$. It achieves this goal by performing stochastic gradient descent, using backpropagation, on $loss_{big}$: at each step of the computation the value of each random variable is extracted according to their interdependent distributions. $loss_{big}$ will be described by a function in $\Pi_{big}$ and specific values for $s=(x,y)$ and $s1 \ldots s2$, which are generated (trough extractions from a dataset) after having randomly selected a specific task $t$ for that step.

## Justification

I can't prove that this idea will work, but I do have some motives to think that either this or something like this might work in principle.

Supervised learning is, in a way, a form of statistical inductive reasoning. In principle, expectations about unobserved examples based on observed ones cannot be fully justified.

Among all possible functions that would produce the observed examples, neural networks are biased in favor of the ones that can be better approximated by their size-limited architecture, including any regularizer that has been added to it. This is good because these are also the ones that, in practice, often tend to match reality, much better than any overfitting result.

As humans, we can often communicate a task to each other using only a few examples. The reason we can do this is not that we infer a description of the task, from those few examples, which is well justified in any abstract sense. Rather, we have common biases, pragmatics, assumptions and understandings that we can rely on. Our common sense, our primordial instincts and our shared intuition guide us towards the descriptions of the task which is most interesting or useful.

What makes neural networks less efficient than us in learning tasks which are interesting and useful to humans is that they do not share the same biases as us, since they are purely mathematical models, trained with a purely mathematical process, without any primordial human instinct or understanding embedded in their architecture.

Consider, for example, the task of classifying dog pictures and cat pictures. A human given just a few photos for each category will immediately understand what the task is about and probably would even if previously unfamiliar with cats and dogs. A neural network, on the other hand, will look for patterns humans wouldn't care about and if any useless correlation is found (maybe the cat photos just randomly happen to share some aspect in their background that the dog photos do not share), that pattern may be learned by the network. To prevent this, we must supply the learning process with enough examples that irrelevant patterns don't randomly occur in most of the dataset, which means that we need many examples.

The idea I suggest is, in essence, that of making the training process artificially biased in the same way that we are, so that we can communicate a task to it with just a few examples. Because the training of *big network* has observed a distribution of tasks that we care about, inference on *big network*, which is also training of *small network*, can extract that information and gravitate towards implicit task descriptions that are actually interesting.

Common biases, pragmatics, assumptions that allow us to communicate effectively.
