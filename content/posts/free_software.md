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

Programmers typically create software by writing *source code* in a *programming language*. Source code is primarily text. It's a detailed description of the program which trained humans and computers alike can understand. It can be converted, trough *compilation*, into other forms that can only be read by computers: *object code*. The result is still the same program, just represented in a different way, which is usually more efficient. The reverse operation (going from object code to human-readable source code) is often hard, if not nearly impossible.

Legally, original literary and artistic works, such as poems and paintings, are covered by *copyright* (or "author's rights"). Some uniformity across different countries is provided by the [Berne Convention](https://www.wipo.int/treaties/en/ip/berne/). Copyright is automatic and it exists from the moment the work is first fixed in a material medium. In general, preparing derivatives based on an existing work, reproducing it in copies and conveying it to the public are actions that, with some exceptions, require authorization from the copyright holder and are illegal if unauthorized. Software is covered by [copyright](https://en.wikipedia.org/wiki/Software_copyright) because it is either considered a kind of literary work or protected similarly to literary works.

Suppose you receive a program, made by someone else, in object form. You cannot study it and know what it does and how it works in detail, because you don't have the corresponding source code to read. You could technically distribute copies of the program (computers can always copy data), but you aren't legally allowed to do so without authorization. You may be unable to modify the program to your liking for both legal and technical reasons.

Legal and technical restrictions on software go beyond copyright and withholding source code. In an ever more digitalized world, restrictions on software give a lot of power to its rightholders, and a lot of control on those that become dependent on the programs they use.

## Free software

[*Free software*](https://www.gnu.org/philosophy/free-sw.html) is software which any user, in any field of endeavor, is free to run, analyze, modify and distribute. This means that it is provided alongside with equal access to its source code, as well as an authorization to perform these actions.

In "free software" the word "free" refers to freedom (as in "free speech"), not to price (as in "free beer"). This ambiguity is specific to the English language, which is why sometimes the Spanish and French word "libre" is used, instead of "free", to avoid confusion. In practice, free software typically happens to be distributed at no charge (partly because anyone that receives can also distribute it), but a lot of software available at no charge is not free software.

The [GNU](https://www.gnu.org/) project, [announced](https://www.gnu.org/gnu/initial-announcement.html) by [Richard Stallman](https://stallman.org/) in the '80s, is especially important for the history of free software. The idea was to create a free operating system. Stallman also founded the [Free Software Foundation](https://www.fsf.org/), a non-profit organization which supports GNU and other initiatives and also maintains the [free software definition](https://www.gnu.org/philosophy/free-sw.html).

The *free software movement* supports software freedom on moral grounds, based on the idea that non-free software is controlled by its owner rather than the user and that this constitutes an instrument of unjust power over users' computing. It is, however, possible to use and endorse free software because of its numerous advantages, even without agreeing with the philosophy underlying the movement.

The [Debian](https://www.debian.org/index.it.html) project, announced by [Ian Murdock](https://ianmurdock.com/) in 1993, builds upon GNU and a lot of other software to deliver a free operating system. It is still extremely popular and relevant in technical environments. Debian used to be sponsored by the Free Software Foundation. [Bruce Perens](https://perens.com/) later became the leader of the project and wrote the [Debian Free Software Guidelines](https://wiki.debian.org/DebianFreeSoftwareGuidelines), which Debian uses, together with other documents, to establish the boundary between free and proprietary software.

## Free software licenses

In order to exercise software freedom, a user needs to be allowed, by the rightholders of the program, to do so, trough a *license* (synonym of "authorization" and of "permission").

Free software licenses are *public licenses* (permissions granted to anyone who receives a copy of the program) written as reusable documents. In principle, anyone could write one's own license, but it's strongly recommended against, in order to prevent [proliferation](https://en.wikipedia.org/wiki/License_proliferation).

Most licenses come at certain *conditions* (only applying as long as long as they are met). Some conditions or restrictions are considered permissible in a free software license.

Conditions such as that of providing attribution or retaining certain notices when distributing the program are permissible and widespread in free software licenses, as are disclaimers of warranty and liability. On the other hand, restrictions against commercial use or uses which the author abhors for moral or political reasons can never be part of a free software license, especially when they limit the [freedom to run the program](https://www.gnu.org/philosophy/programs-must-not-limit-freedom-to-run.html).

The Free Software Foundation maintains a [list](https://www.gnu.org/licenses/license-list.html) of licenses, each classified as either free or proprietary. In general, however, few free software licenses, such as the [MIT](https://opensource.org/license/mit/) license, the [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) license, the [GNU GPL](https://www.gnu.org/licenses/) and some others, are very widely and commonly used and preferred precisely because of their popularity.

## Copyleft

Of all restrictions that are permissible in a free software license, [copyleft](https://www.gnu.org/licenses/copyleft.html) is arguably the most restrictive, interesting and discussed one.

A copyleft license allows distributing one's own modifications to the software only as free software, along with source code, under the same license (or a compatible one). In essence, the copyleft condition ensures that software freedom is preserved when modified versions of the program are passed on.

A license which uses the mechanism of copyleft can be described as "reciprocal" or "share alike". A share-alike license, however, is not necessarily free (for example, it might have a non-commercial restriction). A copyleft license is a license which is both share-alike and free.

Copyleft is deeply rooted in the history of free and open source software. It is considered a permissible restriction because it protects software freedom itself and is not based on other principles (unlike, for example, restrictions against certain fields for separate moral or political reasons).

Most free and open source licenses are not copyleft licenses. When, if ever, to use a copyleft license is still debated and ultimately it's a matter of subjective choice.

Copyleft can be used strategically as a way to promote the release of free software by those that would like to distribute modified versions of the program, but might otherwise do so under proprietary terms.

One of the main issues with copyleft is that it can lead to [incompatibility](https://www.gnu.org/licenses/license-compatibility.html) between licenses which may prevent mixing pieces of software under different licenses.

## Remixing software

There are several ways in which software can be "remixed". These include, among others, *forks*, *libraries* and *patches*.

It's always possible to independently modify and then distribute a free program under the same license. When doing so, one is creating a *fork*, while the original is referred to as "upstream".

When building new programs, programmers almost never start from scratch. A *library* is a collection of software modules which can be reused as components of larger programs. When programming, using libraries made by others is the norm, not the exception.

Free programs are often developed cooperatively. Maintainers of a project can publish its source code online. Independent programmers can then contribute by sending *patches* (suggested modifications), which maintainers can choose to *merge* (apply) or not. By default, individual contributors continue to hold the copyright on their own portions of code, but license them publicly (including to maintainers) under the same license as that of the project.

As a result of mutual cooperation and exercise of software freedom, one program can have hundreds of authors and copyright holders. Each one licenses one's own rights (to the respective portions of the program) to the user. In the simplest case, everyone is using the exact same license document. Usually it's more complex, but, as long as all licenses are cross-compatible, software freedom is preserved. Typically there is only one license (the main and most restrictive one) the end-user actually has reason to care about. Maintainers may have to deal with a bit more complexity in order to ensure compliance.

## Motivations

At this point in the article, you might be wondering why anyone would actually develop free software. There are plenty of motivations and this section will mention a few.

Software freedom is not anti-business and it's not anti-money. Indeed, the only business models incompatible with it are the ones that require restricting the user. Many business models are perfectly consistent with releasing free software, which also happens to be good publicity for the company and, often, a way to get contributions from the community. In some cases, companies that want to release a program can only do so as free software because of copyleft.

While making money by developing free software is possible, for-profit companies are not the only ones doing so. For non-profit organizations seeking to make the world a better place and governments serving the interests of their citizens, software freedom is the obvious choice.

Individuals can earn by making free software, but many chose to do so for entirely different reasons. For many, writing code is fun, just like many other activities are fun to other people, and this is a strong motivator on its own. It can also be a learning experience. People can also choose to share the programs they write out of altruism, to help others, or for ideological reasons, in order to support software freedom.

Companies and individuals alike can also contribute to programs they themselves use. Making improvements available upstream, so that they can be included in future versions of the software, can be much more efficient than having to patch it each time. Indeed, shared development is cheaper and many people enjoy cooperation.

## Advantages

Software freedom leads to many advantages for the user, such as:

- *Cost*: While free software doesn't have to be available at no charge, it typically is. Even when it isn't, multiple people can buy one copy and reproduce it among themselves, perfectly legally and morally.
- *Customization*: Because free software can be modified, it can be customized to one's own needs.
- *Security*: While this may be counter-intuitive to some, the fact that source code is readily available to be studied by anyone is good from a security perspective. It's well understood that computer security should not be addressed trough obscurity (Kerckhoffs's principle). If the source code is public, anyone can verify the absence of backdoors and any accidental vulnerability can be reported and corrected (Linus's law).
- *Cooperation*: When working cooperatively on a project, free software is ideal because users care share it among themselves and use it without being encumbered by a proprietary license.
- *Privacy*: Free software can be obtained independently from the author and used without a subscription. Any telemetry functionality or spyware can be removed. Therefore, unless the very functionalities of the program require that it communicates trough the network, free software can be privately used in secrecy. Privacy is control of one's data, and free software gives more control to the user.
- *Forkability*: Free software can be forked, allowing the existence of different variants and flavors of the same program. When the maintainers of a given project abandon it, independent forks can be created, continuing to provide users with updates.
- *Dependability*: A free program never ceases to exist, because any user is allowed to retain copies for any length of time.
- *Applicability*: One can learn how to use a free program, become good at it, and then use it, years later, in unforeseen scenarios (such as when a hobby becomes a commercial endeavor), thanks to the unrestricted freedom to run it.
- *Interoperability*: Free program use free file formats, which allows communication between different programs.

You can use free software the way it suits you, share it with others and, with the right tools, tweak it to your needs. You can use it privately, for any purpose, without yielding control to someone else. You can cooperate with others who don't want to be restricted either. A free program won't suddenly stop existing, nor will it force you to make an update you don't want. It won't make your files, your digital life, accessible only at the erratic whim of someone else, nor will it lock them behind the gate of a file format which can only be opened with the approval of some company.

When a piece of proprietary software is made available, this is only a step forward for its own rightsholders, because it's only "available" to those that accept their conditions. When a piece of free software is made available, when it is publicly shared of the world, this is a step forward for everyone.

The advantages of free software are relevant for individual users and also, possibly much more, for companies and enterprise users. They are, however, even greater for government-run institutions.

## Governments and free software

Thanks to software freedom, governments can uphold copyright and still exercise their sovereignty in determining the policies that need to be followed, and exactly what can and cannot be done within the borders of their jurisdictions, without giving excessive control or de-facto authority to software authors.

## Non-software assets

Software programs aren't the only digital assets that can be distributed under a free license. Artworks, books, music and all sorts of other works are also subject to copyright.

The [Definition of Free Cultural Works](https://freedomdefined.org/Definition) and the [Open Definition](https://opendefinition.org/) (by the [Open Knowledge Foundation](https://okfn.org/)) independently provide definitions that can be used to establish which licenses are "free" or "open". The relevant freedoms are the same as those for free and open source software, just translated out of the software domain.

[Creative Commons](https://creativecommons.org/) is a nonprofit organization which publishes public licenses which can be used by many. Different licenses written by the Creative Commons organization are widely different between each other. Many of them are proprietary because they include non-free restrictions (such as those against commercial use or sharing derivative works), but some are free.

Creative Commons [clarifies](https://creativecommons.org/2008/02/20/approved-for-free-cultural-works/) which, among its several different licenses, are suitable for free cultural works. [CC0](https://creativecommons.org/publicdomain/zero/1.0/) is a public domain declaration: it waives all copyright on the work, which then can be used without conditions. [CC BY](https://creativecommons.org/licenses/by/4.0/) and [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) are free public licenses which require attribution and prohibit any additional technical or legal restriction on the work. CC BY-SA is a *ShareAlike* license (effectively the same mechanism as copyleft).

While Creative Commons licenses are widely used because of their simplicity, other free licenses suitable for non-software works also exist, such as the [Free Art License](https://artlibre.org/licence/lal/en/) and the [GNU GPL](https://www.gnu.org/licenses/licenses.html), which, while mainly designed for software, can be used for other works as well.

The concept of "source code" exists for non-software works too, and it has the same meaning: the preferred form of the work for making modifications to it. It's arguably less important than for software, though, since books and art pieces are intelligible to humans (and, with some effort, also modifiable) even when stored in other formats. Some copyleft free licenses (such as the GNU GPL) require that access to source code is given when distributing a derivative, while others (such as CC BY-SA and the Free Art License) do not.

The same digital asset (for example, an image) can be stored in a computer file in many different *formats* that represent the same information differently. Some file formats can only be read using proprietary software (due to secrets or legal restrictions), constraining the user, while others can be dealt with using free and open source software. When distributing free cultural works, it's important to use a free format for doing so, in order to avoid these restrictions.

The distinction between software and non-software items in the world of free and open content does matter to some extent, but is not crucial and is blurred for some assets. The same freedoms and, often, the same terminologies and even the same licenses apply across different domains.

The Free Software Definition, the Debian Free Software Guidelines, the Open Source Definition, the Definition of Free Cultural Works and the Open Definition all describe the same set of freedoms and should be read in the most convergent way possible, keeping the tradition and the common norms of the free and open source software community in context.

## Examples

In technical endeavors, free software is common at every level, for programming, managing online services, security purposes and more. It is not, however, just for the tech-savvy.

There are several well-known cross-platform free and open source programs, publicly available at no charge, which you may be familiar with. Here are just a few:

- [Mozilla Firefox](https://www.mozilla.org/it/firefox/): Web browser.
- [Blender](https://www.blender.org/): Program for 3D digital art.
- [OpenOffice](https://www.openoffice.org/) and its fork [LibreOffice](https://www.libreoffice.org/): Office suite for text documents, spreadsheets, presentations and more.
- [GIMP](https://www.gimp.org/): Image manipulation program, suitable for photo editing and art.
- [Inskape](https://inkscape.org/): Program for vector graphics.
- [Krita](https://krita.org/): Image editor for digital art, paintings and animation.
- [VLC](https://www.videolan.org/vlc/): Media player for videos and audio.
- [Telegram](https://telegram.org/): Messaging app. The Telegram *client* (the program actually running on users' device) is free and open source. The *server* software is not published in any form.
- [calibre](https://calibre-ebook.com/): E-book manager.

Even proprietary programs commonly contain portions of free software that their developers decided to use. There are also, almost definitely, many free programs that you depend on for your computing even if you never see them, as they run in the background of your operating system (but are necessary for everything else).

You have probably heard of [Linux](https://www.kernel.org/): a free and open source *kernel*. The kernel of an operating system is a crucial background program that manages resources, orchestrates all other programs and performs certain actions on behalf of them. Many operating systems use Linux as a kernel and have the word "Linux" in their name.

As for free cultural content, [Wikipedia](https://www.wikipedia.org/) is a free (libre) encyclopedia: its articles are available under the [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) license.

## Additional resources

- *[What is Free Software?](https://www.gnu.org/philosophy/free-sw.html)* by the GNU Project
- *[The Open Source Definition](https://opensource.org/osd/)* by the Open Source Initiative
- *[Debian Free Software Guidelines](https://wiki.debian.org/DebianFreeSoftwareGuidelines)* by Debian
- *[Definition of Free Cultural Works](https://freedomdefined.org/Definition)* by Definition of Free Cultural Works
- *[Permissible restrictions](https://freedomdefined.org/Permissible_restrictions)* by Definition of Free Cultural Works
- *[The Open Definition](https://opendefinition.org/)* by the Open Knowledge Foundation
- *[Introduction to Free Software and the Liberation of Cyberspace](https://www.youtube.com/watch?v=Ag1AKIl_2GM)* by Richard Stallman
- *[Categories of Free and Nonfree Software](https://www.gnu.org/philosophy/categories.html)* by the GNU Project
- *[Goodbye, "free software"; hello, "open source"](http://www.catb.org/~esr/open-source.html)* by Eric Raymond
- *[Happy birthday to GNU](https://www.gnu.org/fry/)* by Stephen Fry
- *[Why Software Should Not Have Owners](https://www.gnu.org/philosophy/why-free.html)* by Richard Stallman
- *[Selling Free Software](https://www.gnu.org/philosophy/selling.html)* by the GNU Project
- *[What Is The Spirit of Open Source?](https://haacked.com/archive/2012/02/22/spirit-of-open-source.aspx/)* by Phil Haack
- *[Let's Talk About Open Source](https://blog.sentry.io/lets-talk-about-open-source/)* by David Cramer
- *[Open Source is Not About You](https://gist.github.com/richhickey/1563cddea1002958f96e7ba9519972d9)* by Rich Hickey
