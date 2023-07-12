---
title: "Free and open source software"
date: 2023-01-04T19:54:01+01:00
draft: false
lastmod: 2023-01-07T19:54:01+01:00
---

In this article, I will introduce the concept of free and open source software.

This is not an article written just for tech-savvy people. On the contrary, it's for everyone, because the topic at hand is important for society as a whole.

The article doesn't assume too much prior knowledge. However, it's not crucial to understand every tiny detail and it is my hope that the most important points will get across, regardless of how tech-minded you are.

If the topic seems complex, don't let this dissuade you from using free and open source software. For end users, its simpler in practice than it may seem.

## Basic ideas

Programmers typically create software by writing *source code* in a *programming language*. Source code is primarily text. It's a detailed description of the program which trained humans and computers alike can understand. Source code can be converted, trough *compilation*, into other forms that can only be read by computers: *object code*. The result is still the same program, just represented in a different way, which is usually more efficient. The reverse operation (going from object code to human-readable source code) is often hard, if not nearly impossible.

Legally, original literary and artistic works, such as poems and paintings, are covered by *copyright* (or "author's rights"). Some uniformity across different countries is provided by the [Berne Convention](https://www.wipo.int/treaties/en/ip/berne/). Copyright is automatic and it exists from the moment the work is first fixed in a material medium. In general, preparing derivatives based on an existing work, reproducing it in copies or conveying it to the public are actions that, with some exceptions, require authorization from the copyright holder and are illegal if unauthorized.

Software is covered by [copyright](https://en.wikipedia.org/wiki/Software_copyright) because it is either considered a kind of literary work or protected similarly to literary works.

Suppose you receive a program, made by someone else, in object form. You cannot study it and know what it does and how it works in detail, because you don't have the corresponding source code to read. You could technically distribute copies of the program (computers can always copy data), but you aren't legally allowed to do so without authorization. Modifying the program to make your own version is something you may be unable to do for both reasons.

In an ever more digitalized world, these restrictions give a lot of power to those that exercise them, and a lot of control on those that become dependent on the programs they use.

## Free software

[*Free software*](https://www.gnu.org/philosophy/free-sw.html) is software which any user, in any field of endeavor, is free to run, analyze, modify and distribute. This implies that it is provided alongside with equal access to its source code as well as an authorization to perform such actions. Anyone who owns a copy of the program has *software freedom*.

It is important to note that in "free software" the word "free" refers to freedom (as in "free speech"), not to price (as in "free beer"). This ambiguity is specific to the English language, which is why sometimes the Spanish and French word "libre" is used instead of "free" to avoid confusion. In practice, free software is often distributed at no charge (partly because anyone that receives can also distribute it), but a lot of software available at no charge is not free software.

The [GNU](https://www.gnu.org/) project, [announced](https://www.gnu.org/gnu/initial-announcement.html) by [Richard Stallman](https://stallman.org/) in the '80s, who then published the [GNU Manifesto](https://www.gnu.org/gnu/manifesto.html), is especially important for the history of free software. The idea was to create a free operating compatible with Unix (a popular operating system at the time). Stallman also founded the [Free Software Foundation](https://www.fsf.org/), a non-profit organization which supports the GNU project and other initiatives and also maintains the [free software definition](https://www.gnu.org/philosophy/free-sw.html).

The *free software movement* supports software freedom on moral grounds, based on the idea that non-free software is controlled by its owner rather than the user and that it constitutes an instrument of unjust power over users' computing. It is, however, possible to use and endorse free software because of its numerous advantages, even without agreeing with the philosophy underlying movement.

The [Debian](https://www.debian.org/index.it.html) project, announced by [Ian Murdock](https://ianmurdock.com/) in 1993, builds upon GNU and a lot of other software to deliver a free operating system. It is still extremely popular and relevant in technical environments. Debian used to be sponsored by the Free Software Foundation. [Bruce Perens](https://perens.com/) later became the leader of the project and wrote the [Debian Free Software Guidelines](https://wiki.debian.org/DebianFreeSoftwareGuidelines), which Debian uses, together with other documents, to establish the boundary between free and proprietary software.

## Free software licenses

The free software community has a rather clear conventional understanding on what restrictions can exist without making a program non-free. Software which is, in some way, non-free, is referred to as "proprietary".

Besides source code, a user needs to be allowed, by the rightholders of the program, to exercise software freedom, trough a *license* (which is a synonym of "authorization" and of "permission").

Free software licenses are *public licenses* (given to anyone that receives a copy of the program) and are written as reusable documents. In principle, it's possible for anyone to write one's own license, but it's strongly recommended to stick to a well-known one instead, in order to prevent [proliferation](https://en.wikipedia.org/wiki/License_proliferation).

Conditions such as that of providing attribution or retaining certain notices when distributing the program are permissible and widespread in free software licenses, as are disclaimers of warranty and liability. On the other hand, restrictions against commercial use or uses which the author abhors for moral or political reasons can never be part of a free software license, especially when they limit the [freedom to run the program](https://www.gnu.org/philosophy/programs-must-not-limit-freedom-to-run.html).

The Free Software Foundation maintains a [list](https://www.gnu.org/licenses/license-list.html) of licenses, each classified as either free or proprietary. In general, however, few free software licenses, such as the [MIT](https://opensource.org/license/mit/) license, the [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) license, the [GNU GPL](https://www.gnu.org/licenses/) and some others, are very widely and commonly used and preferred precisely because of their popularity.

## Copyleft

Of all restrictions that are permissible in a free software license, [copyleft](https://www.gnu.org/licenses/copyleft.html) is likely the most restrictive one, as well as the one which is most debated and controversial.

A copyleft license allows distributing one's own modifications to the software only at the condition that they are conveyed as free software under the same license (or a compatible one). To meet the copyleft condition, someone who has modified the program and then choses to distribute it to others has to give the recipients access to the corresponding source code of the modified program and a permission to exercises the same freedoms that the original license granted.

A license which uses the mechanism of copyleft can be described as "reciprocal" or "share alike". A share-alike license, however, is not necessarily free (for example, it might have a non-commercial restriction). A copyleft license is a license which is both share-alike and free.

The license doesn't apply to those who don't meet its terms and conditions, including, of course, copyleft. Distributing a modified version of a copyleft program without meeting the condition is copyright infringement because no license to do so exists. Full copyright protection is the default. Only when the license is valid, when the conditions are met, one is allowed to distribute copies of the software.

The reason that copyleft is a permissible restriction in free software licenses is that it still allows distributing modified copies of the program, as free software and because it's only based on the principles of software freedom itself (unlike, for example, licenses with restrictions against certain fields for separate moral or political reasons).

Copyleft is deeply rooted in the history of free and open source software and it's clear that copyleft licenses are indeed free and open source. Most free and open source licenses, however, are not copyleft licenses. When, if ever, to use a copyleft license is still debated and ultimately it's a matter of subjective choice.

Copyleft can be used strategically as a way to promote the release of free software by those that would like to distribute modified versions of the program, but might otherwise do so under proprietary terms.

Most restrictive permissible restriction. Incentivize creation of other free software. Only based on the values of software freedom itself, not other moral or political values. License incompatibility.

## Remixing software

There are several ways in which software can be "remixed", and some are outlined here.

It's not crucial to understand this section in detail. It's sufficient to know that software programs typically contain portions that were originally part of other projects, or that have been written by someone other than the main authors of the software.

The important point is that, as a result of mutual cooperation and exercise of software freedom, one piece of software can have hundreds of authors and copyright holders. Each one licenses one's own rights (to the respective portions of the program) to the user.

In the simplest case, everyone is using the exact same license document. Usually it's more complex, but, as long as all licenses are cross-compatible, software freedom is preserved. Typically there is only one license (the main and most restrictive one) the end-user actually has reason to care about. Maintainers may have to deal with a bit more complexity in order to ensure compliance.

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
- *Cooperation*: When working cooperatively on a project, free software is ideal because users care share it among themselves and use it without being encumbered by a proprietary license.
- *Privacy*: Free software can be obtained independently from the author and used without a subscription. Any telemetry functionality or spyware can be removed. Therefore, unless the very functionalities of the program require that it communicates trough the network, free software can be privately used in secrecy. Privacy is control of one's data, and free software gives more control to the user.
- *Dependability*: A free program never ceases to exist, because any user is allowed to retain copies for any length of time.
- *Applicability*: One can learn how to use a free program, become good at it, and then use it, years later, in unforeseen scenarios (such as when a hobby becomes a commercial endeavor), thanks to the unrestricted freedom to run it.
- *Interoperability*: Free program use free file formats, which allows communication between different programs.

You can use free software the way it suits you, share it with others and, with the right tools, tweak it to your needs. You can use it privately, for any purpose, without yielding control to someone else. You can cooperate with others who don't want to be restricted either. A free program won't suddenly stop existing, nor will it force you to make an update you don't want. It won't make your files, your digital life, accessible only at the erratic whim of someone else, nor will it lock them behind the gate of a file format which can only be opened with the approval of some company.

When a piece of proprietary software is made available, this is only a step forward for its own rightsholders, because it's only "available" to those that accept their conditions. When a piece of free software is made available, when it is publicly shared of the world, this is a step forward for everyone.

The advantages of free software are relevant for individual users and also, possibly much more, for companies and enterprise users. They are, however, even greater for government-run institutions.

## Governments and free software

Thanks to software freedom, governments can uphold copyright and still exercise their sovereignty in determining the policies that need to be followed, and exactly what can and cannot be done within the borders of their jurisdictions, without giving excessive control or de-facto authority to software authors.

## Non-software assets

Software programs aren't the only digital assets that can be distributed under a free license. Artworks, books, music and all sort of other works are also subject of copyright.

The [Definition of Free Cultural Works](https://freedomdefined.org/Definition) and the [Open Definition](https://opendefinition.org/) (by the [Open Knowledge Foundation](https://okfn.org/)) independently provide definitions that can be used to establish which licenses are "free" or "open". The relevant freedoms are the same as those for free and open source software, just translated out of the software domain.

[Creative Commons](https://creativecommons.org/) is a nonprofit organization which publishes public licenses which can be used by many. Different licenses written by the Creative Commons organization are widely different between each other. Many of them are proprietary because they include non-free restrictions (such as those against commercial use or sharing derivative works).

Creative Commons [clarifies](https://creativecommons.org/2008/02/20/approved-for-free-cultural-works/) which, among its several different licenses, can be used for free cultural works. [CC0](https://creativecommons.org/publicdomain/zero/1.0/) is a public domain declaration: it waives all copyright on the work, which then can be used without conditions. [CC BY](https://creativecommons.org/licenses/by/4.0/) and [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) are free public licenses which require attribution and prohibit any additional technical or legal restriction on the work. CC BY-SA is a *ShareAlike* license (effectively the same mechanism as copyleft).

While Creative Commons licenses are widely used because of their simplicity, other free licenses suitable for non-software works also exist. Other copyleft licenses for free cultural works include the [Free Art License](https://artlibre.org/licence/lal/en/) and the [GNU GPL](https://www.gnu.org/licenses/licenses.html) license, which, while mainly designed for software, can be used for non-software works as well.

The concept of "source code" exists for non-software works as well, and it has the same meaning: it's the preferred form of the work for making modifications to it. It's arguably less important than for software, though, since books and art pieces are intelligible to humans (and, with some effort, also modifiable) even when stored in other formats. Some copyleft free licenses (such as the GNU GPL) require that access to source code is given when distributing a derivative, while others (such as CC BY-SA and the Free Art License) do not.

The same digital asset (for example, an image) can be stored in a computer file in many different formats that represent the same information differently. Some file formats can only be read using proprietary software (due to secrets or legal restrictions), constraining the user, while others can be dealt with using free and open source software. When distributing free cultural works, it's important to use a free format for doing so, in order to avoid these restrictions and keep the work actually free.

The distinction between software and non-software items in the world of free and open content does matter to some extent, but is not crucial and is blurred for some assets. The same freedoms and, often, the same terminologies and even the same licenses apply across different domains.

The Free Software Definition, the Debian Free Software Guidelines, the Open Source Definition, the Definition of Free Cultural Works and the Open Definition all describe the same set of freedoms and should be read in the most convergent way possible, keeping the tradition and the common norms of the free and open source software community in context.

## Examples

There are many free and open source programs which are publicly available to everyone online, at no charge. Many of them are widely used.

In technical endeavors, free software is common at every level. Programmers use free tools to develop their own (free or proprietary) software. Administrators use free software to run web servers. Environments based on free software are used internally by companies of all sizes. Software crucial for encryption and security is often free and open source, as is much of the software that constitutes the invisible backbone of the Internet.

Free software is not just for the tech-savvy. Free and open source programs are used in all environments in which computers are and can carry out tasks useful for people at any level of technical skill.

There are several well-known examples of free and open source software that you may be familiar with. Here are just a few:

- [Mozilla Firefox](https://www.mozilla.org/it/firefox/): Web browser.
- [Blender](https://www.blender.org/): Program for 3D digital art.
- [OpenOffice](https://www.openoffice.org/) and its fork [LibreOffice](https://www.libreoffice.org/): Office suite for text documents, spreadsheets, presentations and more.
- [GIMP](https://www.gimp.org/): Image manipulation program, suitable for photo editing and art.
- [Inskape](https://inkscape.org/): Program for vector graphics.
- [Krita](https://krita.org/): Image editor for digital art, paintings and animation.
- [VLC](https://www.videolan.org/vlc/): Media player for videos and audio.
- [Telegram](https://telegram.org/): Messaging app. The telegram *client* (the program actually running on users' device) is free and open source. The *server* software is not published in any form.

It should be noted that even proprietary programs commonly contain portions of free software that their developers decided to use. There are also, almost definitely, many free programs that you depend on for your computing even if you never see them, as they run in the background of your operating system (but are necessary for everything else).

You have probably heard of [Linux](https://www.kernel.org/): a free and open source *kernel*. The kernel of an operating system is a crucial background program that manages resources, orchestrates all other programs and performs certain actions on behalf of them. Many operating systems use Linux as a kernel and have the word "Linux" in their name.

As for free cultural content, [Wikipedia](https://www.wikipedia.org/) is a free (libre) encyclopedia: Wikipedia articles are available under the [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) license.

## Additional resources

- *[What is Free Software?](https://www.gnu.org/philosophy/free-sw.html)* by the GNU Project
- *[The Open Source Definition](https://opensource.org/osd/)* by the Open Source Initiative
- *[Debian Free Software Guidelines](https://wiki.debian.org/DebianFreeSoftwareGuidelines)* by Debian
- *[Definition of Free Cultural Works](https://freedomdefined.org/Definition)* by Definition of Free Cultural Works
- *[The Open Definition](https://opendefinition.org/)* by the Open Knowledge Foundation
- *[Introduction to Free Software and the Liberation of Cyberspace](https://www.youtube.com/watch?v=Ag1AKIl_2GM)* by Richard Stallman
- *[Why Software Should Not Have Owners](https://www.gnu.org/philosophy/why-free.html) by Richard Stallman
- *[Selling Free Software](https://www.gnu.org/philosophy/selling.html)* by the GNU Project
- *[Open Source is Not About You](https://gist.github.com/richhickey/1563cddea1002958f96e7ba9519972d9)* by Rich Hickey

