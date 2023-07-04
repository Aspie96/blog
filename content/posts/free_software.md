---
title: "Free and open source software"
date: 2023-01-04T19:54:01+01:00
draft: false
lastmod: 2023-01-07T19:54:01+01:00
---

In this article, I will introduce the concept of free and open source software.

This is not an article written just for tech-savvy people. On the contrary, it's for everyone, because the topic at hand is important for society as a whole.

The article doesn't assume too much prior knowledge. However, it's not crucial to understand every tiny detail and it is my hope that the most important points will get across, regardless of how tech-minded you are.

## Basic ideas

Programmers typically create software by writing *source code* in a *programming language*. Source code is primarily text. It's a detailed description of the program which trained humans and computers alike can understand. Source code can be converted, trough *compilation*, into other forms that can only be read by computers: *object code*. The result is still the same program, just represented in a different way, which is usually more efficient. The reverse operation (going from object code to human-readable source code) is often hard, if not nearly impossible.

Legally, original literary and artistic works, such as poems and paintings, are covered by *copyright* (or "author's rights"). Some uniformity across different countries is provided by the [Berne Convention](https://www.wipo.int/treaties/en/ip/berne/). Copyright is automatic and it exists from the moment the work is first fixed in a material medium. In general, preparing derivatives based on an existing work, reproducing it in copies or conveying it to the public are actions that, with some exceptions, require authorization from the copyright holder and are illegal if unauthorized.

Software is covered by [copyright](https://en.wikipedia.org/wiki/Software_copyright) because it is either considered a kind of literary work or protected similarly to literary works.

Suppose you receive a program, made by someone else, in object form. You cannot study it and know what it does and how it works in detail, because you don't have the corresponding source code to read. You could technically distribute copies of the program (computers can always copy data), but you aren't legally allowed to do so without authorization. Modifying the program to make your own version is something you may be unable to do for both reasons.

In an ever more digitalized world, these restrictions give a lot of power to those that exercise them, and a lot of control on those that become dependent on the programs they use.

## Free software

[*Free software*](https://www.gnu.org/philosophy/free-sw.html) is software which any user, in any field of endeavor, is free to run, analyze, modify and distribute. This implies that it is provided alongside with equal access to its source code as well as an authorization to perform such actions. These two elements provide *software freedom* to anyone who owns a copy of the program.

It is important to note that in "free software" the word "free" refers to freedom (as in "free speech"), not to price (as in "free beer"). This ambiguity is specific to the English language, which is why sometimes the Spanish and French word "libre" is used instead of "free" to avoid confusion. In practice, free software is often distributed at no charge (partly because anyone that receives can also distribute it), but a lot of software available at no charge is not free software.

The [GNU](https://www.gnu.org/) project, [announced](https://www.gnu.org/gnu/initial-announcement.html) by [Richard Stallman](https://stallman.org/) in the '80s, who then published the [GNU Manifesto](https://www.gnu.org/gnu/manifesto.html), is especially important for the history of free software. The idea was to create a free operating compatible with Unix (a popular operating system at the time). Stallman also founded the [Free Software Foundation](https://www.fsf.org/), a non-profit organization which supports the GNU project and other initiatives and also maintains the [free software definition](https://www.gnu.org/philosophy/free-sw.html).

The [Debian](https://www.debian.org/index.it.html) project, announced by [Ian Murdock](https://ianmurdock.com/) in 1993, builds upon GNU and a lot of other software to deliver a free operating system. It is still extremely popular and relevant in technical environments. Debian used to be sponsored by the Free Software Foundation. [Bruce Perens](https://perens.com/) later became the leader of the project and wrote the [Debian Free Software Guidelines](https://wiki.debian.org/DebianFreeSoftwareGuidelines), which Debian uses, together with other documents, to establish the boundary between free and proprietary software.

## Free software licenses

The free software community has a rather clear conventional understanding on what restrictions can exist without making a program non-free. Software which is, in some way, non-free, is referred to as "proprietary".

Free software licenses are *public licenses* (given to anyone that receives a copy of the program) and are written as reusable documents. In principle, it's possible for anyone to write one's own license, but it's strongly recommended to stick to a well-known one instead, in order to prevent [proliferation](https://en.wikipedia.org/wiki/License_proliferation).

Conditions such as that of providing attribution or retaining certain notices when distributing the program are permissible and widespread in free software licenses, as are disclaimers of warranty and liability. On the other hand, restrictions against commercial use or uses which the author abhors for moral or political reasons can never be part of a free software license, especially when they limit the [freedom to run the program](https://www.gnu.org/philosophy/programs-must-not-limit-freedom-to-run.html).

## Copyleft

Most restrictive permissible restriction. Incentivize creation of other free software. Only based on the values of software freedom itself, not other moral or political values. License incompatibility.

## Remixing software

There are several ways in which software can be "remixed", and some are outlined here.

It's not crucial to understand this section in detail. It's sufficient to know that software programs typically contain portions that were originally part of other projects, or that have been written by someone other than the main authors of the software.

The important point is that, as a result of mutual cooperation and exercise of software freedom, one piece of software can have hundreds of authors and copyright holders. Each one licenses one's own rights (to the respective portions of the software) to the user.

In the simplest case, everyone is using the exact same license document. Usually it's more complex, but, as long as all licenses are cross-compatible, software freedom is preserved. Usually there is only one license (the main and most restrictive one) the end-user actually has reason to care about. Maintainers may have to deal with a bit more complexity to ensure compliance.

The rest of this section is for the most curious readers, others can feel free to skip to the next one, where I explain some of the advantages of free software.

### Forks

It's always possible to modify and then distribute a free program under the same license. When doing so, one is creating a *fork*, while the original is referred to as "upstream".

The ability to fork software is a crucial aspect of the free software community. It allows different flavors of roughly the same program to be independently created, for different brands of users with different tastes and preferences.

When the maintainers of a given project abandon it, independent forks can be created, continuing to provide users with updates.

When forking software, it's crucial to fully comply with the terms of the license and it's generally advisable to continue using the same license for additional modifications, even when it's not required. Attribution to the original program should be given in a prominent and conspicuous way. It's extremely important, however, to make it very clear that the fork is independent from the upstream project and to avoid confusion. The name and branding of a fork should always be different from the original.

### Libraries

Because software is complex, it is built in a *modular* way. Different portions of one large program are somewhat self-contained and offer some kind of functionality, including ones the user never thinks about but are actually needed to make the program function. When using (part of) a module, programmers don't typically have to actively think about its inner workings and, instead, write code that exploits the functionality the module offers interacting with it according to its documentation.

A *library* is a collection of software modules which are written for future use as part of larger programs (or even larger libraries). Libraries are written without knowing what the programs that use them will actually look like and focus on providing a set of related functionalities in a flexible way.

If this sounds complex, consider the problem of sorting a list of numbers. Many programs may need to so under the hood, even if the end user doesn't know about it. Instead of rewriting the code to do so each time, programmers may simply include, in their programs, a piece of reusable pre-written code that sorts lists of number. That's an example of as mall library. Typically, libraries can offer many more (and more complex) functionalities.

When programming, using libraries made by others is the norm, not the exception. One program can use several libraries, some directly and some indirectly (trough other libraries).

An interesting point to make is that the difference between libraries and programs is much thinner, more blurred and probably less important than it might look. It's possible for full programs to be turned into libraries, or to be used as if they were by other programs. And some libraries can be made into end-user programs without adding much more. This only really matters for programmers and expert users. What should be clear, however, is that from the prospective of software freedom there is not much difference, if any, between programs and libraries.

### Patches

Free programs are often developed cooperatively. They do not have to be, they just often are. Maintainers of the project can publish source code on a *code forge* (an online platform for publishing code, a sort of social media for computer nerds). Independent programmers from around the web can then contribute by suggesting changes to the code, to fix *bugs* (errors), to add new functionalities or to improve it in some other way.

A *patch* is a suggested modification sent to a project by a contributor. It indicates what code to add or remove, and where, in a machine-readable way. Maintainers can choose to *merge* (apply) these changes or not.

When a project is open to contributions, the norm in the free software community is that, unless otherwise specified, individual contributors continue to hold the copyright on the portions code which they provide, but license it publicly, to everyone, under the same license as that of the project.

## Advantages of free software

Software freedom leads to many advantages for the user, such as:

- *Cost*: While free software doesn't have to be available at no charge, it typically is. Even when it isn't, multiple people can buy one copy and reproduce it among themselves, perfectly legally and morally.
- *Customization*: Because free software can be modified, it can be customized to one's own needs.
- *Security*: While this may be counter-intuitive to some, the fact that source code is readily available to be studied by anyone is good from a security perspective. It's well understood that computer security should not be addressed trough obscurity (Kerckhoffs's principle). If the source code is public, anyone can verify the absence of backdoors and any accidental vulnerability can be reported and corrected (Linus's law).
- *Cooperation*: When working cooperatively on a project, free software is ideal because users care share it among themselves independently, without being encumbered by a proprietary license.
- *Privacy*: Free software can be obtained independently from the author and used without a subscription. Any telemetry functionality or spyware can be removed. Therefore, unless the very functionalities of the program requires that it communicates trough the network, free software can be privately used in secrecy.
- *Dependability*: A free program never ceases to exist, because any user is allowed to retain copies for any length of time.
- *Applicability*: One can learn how to use a free program, become good at it, and then use it, years later, in unforeseen scenarios (such as an unexpected commercial endeavor from what looked like would have remained just a hobby), thanks to the unrestricted freedom to run it.
- *Interoperability*: Free program use free file formats, which allows communication between different programs.

When a piece of proprietary software is made available, this is only a step forward for its own rightsholders, because it's only "available" to those that accept their conditions. When a piece of free software is made available, when it is publicly shared of the world, this is a step forward for everyone.

The advantages of free software are relevant for individual users and also, possibly much more, for companies and enterprise users. They are, however, even greater for government-run institutions.

## Governments and free software

Thanks to software freedom, governments can uphold copyright and still exercise their sovereignty in determining the policies that need to be followed, and exactly what can and cannot be done within the borders of their jurisdictions, without giving excessive control or de-facto authority to software authors.

## Non-software assets

## Additional resources

- *[What is Free Software?](https://www.gnu.org/philosophy/free-sw.html)* by the GNU Project
- *[The Open Source Definition](https://opensource.org/osd/)* by the Open Source Initiative
- *[Debian Free Software Guidelines](https://wiki.debian.org/DebianFreeSoftwareGuidelines)* by Debian
- *[Definition of Free Cultural Works](https://freedomdefined.org/Definition)* by Definition of Free Cultural Works
- *[The Open Definition](https://opendefinition.org/)* by the Open Knowledge Foundation
- *[Introduction to Free Software and the Liberation of Cyberspace](https://www.youtube.com/watch?v=Ag1AKIl_2GM)* by Richard Stallman
- *[Selling Free Software](https://www.gnu.org/philosophy/selling.html)* by the GNU Project
- *[Open Source is Not About You](https://gist.github.com/richhickey/1563cddea1002958f96e7ba9519972d9)* by Rich Hickey

