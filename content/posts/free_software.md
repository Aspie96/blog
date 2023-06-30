---
title: "Free and open source software"
date: 2023-01-04T19:54:01+01:00
draft: false
lastmod: 2023-01-07T19:54:01+01:00
---

In this article, I will introduce the concept of free and open source software.

## Basic ideas

Programmers typically create software by writing *source code* in a *programming language*. Source code is primarily text. It's a detailed description of the program which trained humans and computers alike can understand, thanks to the clarity and precision of programming languages. Source code can be converted, trough *compilation*, into other forms that can only be read by computers: *object code*. The result is still the same program, just represented in a different way, which is usually more efficient. The reverse operation (going from object code to human-readable source code) is often hard, if not nearly impossible.

Legally, literary and artistic works are covered by *copyright*. Some uniformity across different countries is provided by the [Berne Convention](https://www.wipo.int/treaties/en/ip/berne/), which establishes a common set of legal principles. Copyright is automatic and it exists from the moment the work is fixed in a material medium. In general, preparing derivatives based on an existing work, reproducing it in copies or conveying it to the public are actions that, with some exceptions, require authorization from the copyright holder and are illegal if unauthorized.

Software is covered by [copyright](https://en.wikipedia.org/wiki/Software_copyright) because it is either considered a kind of literary work or protected similarly to literary works in the United States, in the European Union and in other jurisdictions.

Suppose you receive a program, made by someone else, in object form. You cannot study it and know what it does and how it works in detail, because you don't have the corresponding source code to read. You could technically distribute copies of the program (computers can always copy data), but you aren't legally allowed to do so without authorization. And modifying the program to make your own version is something you may be unable to do for both reasons.

## Free software

[*Free software*](https://www.gnu.org/philosophy/free-sw.html) is software which any user, in any field of endeavor, is free to run, analyze, modify and distribute. This implies that it is provided alongside with equal access to its source code as well as an authorization to perform such actions. These two elements provide *software freedom* to anyone who owns a copy of the program.

It is important to note that in "free software" the word "free" refers to freedom (as in "free speech"), not as price (as in "free beer"). This ambiguity is specific to the English language, which is why sometimes the Spanish and French word "libre" is used instead of "free" to avoid confusion. In practice, free software is often distributed at no charge (partly because anyone that receives can also distribute it), but a lot of software available at no charge is not free software.

A detailed description of the history of free software is out of the scope of this article. Of special interest, however, is the [GNU](https://www.gnu.org/) project, [announced](https://www.gnu.org/gnu/initial-announcement.html) by [Richard Stallman](https://stallman.org/) in the '80s, who then published the [GNU Manifesto](https://www.gnu.org/gnu/manifesto.html). The idea was to create a free operating compatible with Unix (a popular operating system at the time, which has been rather influential). Stallman then founded the [Free Software Foundation](https://www.fsf.org/), a non-profit organization.

## Free software licenses

The free software community has a rather clear conventional understanding of which restrictions can apply to software freedom without making a program non-free. Free software licenses are *public licenses* (given to anyone that receives a copy of the program) and are written as reusable documents.

In principle, it's possible for anyone to write one's own free software license, but it's strongly recommended to stick to a well-known license instead in order to prevent [proliferation](https://en.wikipedia.org/wiki/License_proliferation).

Conditions such as that of providing attribution or retaining certain notices when distributing the program are permissible and widespread in free software licenses, as are disclaimers of warranty and liability. On the other hand, restrictions against commercial use of the program, or against uses which the author abhors for moral or political reasons, can never be part of a free software license, especially when they limit the [freedom to run the program](https://www.gnu.org/philosophy/programs-must-not-limit-freedom-to-run.html).

## Advantages of free software

Software freedom leads to many advantages for the user, such as:

- *Cost*: While free software doesn't have to be available at no charge, it typically is. Even when it isn't, multiple people can buy one copy and reproduce it among themselves, perfectly legally and morally.
- *Customization*: Because free software can be modified, it can be customized to one's own needs.
- *Security*: While this may be counter-intuitive to some, the fact that source code is readily available to be studied by anyone is good from a security perspective. It's well understood that computer security should not be addressed trough obscurity (Kerckhoffs's principle). If the source code is public, anyone can verify the absence of backdoors and any accidental vulnerability can be reported and corrected (Linus's law).
- *Dependability*: A free program never ceases to exist, because any user is allowed to retain copies for any length of time.
- *All-purpose*: One can learn how to use a free program, become good at it, and then use it, years later, in unforeseen scenarios (such as an unexpected commercial endeavor from what looked like would have remained just a hobby), thanks to the unrestricted freedom to run it.
- *Interoperability*: Free program use free file formats, which allows communication between different programs.
