---
author: "Valentino Giudice"
date: 2023-08-30T01:23:32+02:00
draft: false
title: "Free and Open Source Software"
---

In this article, I will overview the concept of free and open source software.

This is not an article written just for tech-savvy people. On the contrary, it's for everyone, because the topic at hand is important for society as a whole.

I will not assume too much prior knowledge. However, understanding every tiny detail is not crucial and it is my hope that the most relevant points will get across, regardless of how tech-minded you are.

If the topic seems complex at first, don't let this dissuade you from using free and open source software. For end users, it's simpler in practice than it may seem.

In this article, I will first talk about existing restrictions on computer programs. Then, I will introduce the idea of free and open source software. I will follow with the topic of licensing. I will mention a few ways software can be "remixed". After that, I will discuss the motivations that lead people to develop free and open source software. I will list several advantages of software freedom. Then, I will write about its relationship with government policies. I will describe how similar ideas apply to non-software digital assets. Finally, I will give some examples of free and open source software which you may already be familiar with.

## Restrictions on software

Programmers typically create software by writing *source code*, as text, in a *programming language*. This may then need to be automatically converted (or "compiled") into *object code*. The result is still the same program, just represented in a different way, which is no longer human-readable and can't easily be turned back to source code.

Legally, original literary and artistic works of authorship, such as poems and paintings, are automatically covered by *copyright* (or "author's rights") as soon as they exist in a material medium. In general, making copies of a work, preparing derivatives and conveying it to the public are actions that require an authorization from the copyright holder. Software programs are covered by [copyright](https://en.wikipedia.org/wiki/Software_copyright) as literary works.

Suppose you receive a program as object code. You cannot study its internal functioning in detail, because you don't have the corresponding source code to read. You could technically distribute copies (computers can always copy data), but you aren't legally allowed to do. You may be unable to modify the program to your liking for both legal and technical reasons.

Restrictions on software, legal or technical, exist beyond just copyright and withholding source code. In an ever more digitalized world, they give rightholders a lot of power and substantial control on users.

## Free Software

*Free software* is software which any user, in any field of endeavour, is free to run, copy, distribute, study and modify. This means that it is provided alongside with access to its source code, as well as an appropriate software licence.

In the '80s, the [GNU](https://www.gnu.org/) project, aimed at creating a free operating system, was [announced](https://www.gnu.org/gnu/initial-announcement.html) by [Richard Stallman](https://stallman.org/). Stallman then founded the [Free Software Foundation](https://www.fsf.org/), a non-profit organization which supports GNU and other initiatives. The FSF also maintains the [Free Software Definition](https://www.gnu.org/philosophy/free-sw.html), which is based on four *[essential freedoms](https://www.gnu.org/philosophy/free-sw.html#four-freedoms)*:

- *Freedom 0*: To run the program as one wishes, for any purpose.
- *Freedom 1*: To study how the program works, and change it so it does as one wishes (requires access to source code).
- *Freedom 2*: To redistribute copies.
- *Freedom 3*: To distribute copies of one's modifications to others (requires access to source code).

In "free software", the word "free" refers to freedom (as in "free speech"), not to price (as in "free beer"). This ambiguity is specific to the English language. Sometimes the Spanish and French word "libre" is used, instead of "free", to avoid confusion. In practice, free software typically happens to be distributed at no charge (partly because anyone that receives can also pass it on), but a lot of software available at no charge is not free software.

The *free software movement* supports *software freedom* on moral grounds, based on the idea that non-free ("proprietary") software is controlled by its owner rather than the user and that this constitutes an instrument of unjust power over users' computing. It is, however, possible to use and endorse free software for more pragmatic reasons, even without agreeing with this philosophy.

## Open Source

*Open source* is the same as free software. The reason for the double name is historical.

[Eric Raymond](http://www.catb.org/~esr/) and [Bruce Perens](http://perens.com/) (leader, at the time, of the [Debian](https://www.debian.org/index.it.html) project, a free operating system, as successor of its founder [Ian Murdock](https://ianmurdock.com/)) started the [Open Source Initiative](https://opensource.org/) in 1998, as president and vice-president respectively. The idea was to promote free software under a different name, leveraging a more pragmatic approach.

The *open source movement*, more utilitarian, rather than based on moral dogma (like the free software movement), and often focused on cooperation and software quality, has been very successful at making open source software widespread.

The [Open Source Definition](https://opensource.org/definition-annotated/), maintained by OSI, is based on the [Debian Free Software Guidelines](https://www.debian.org/social_contract#guidelines) (written by Perens). It is equivalent, in substance, to the Free Software Definition by the FSF, expressing the same concepts with different words and a different structure.

Sometimes the phrase "free and open source software" is used to remain neutral between the two alternatives. It can also be shortened as "FOSS" or "[FLOSS](https://www.gnu.org/philosophy/floss-and-foss.html)" (where the L stands for "libre"). It's also possible to use "free software" and "open source" interchangeably, to refer to the same class of programs, as the Debian community currently does.

Open source is not to be confused with software which is merely *source available*. Whenever source code is provided, the program is indeed source available, but, in order for it to be open source, an appropriate licence, one which grants software freedom, is necessary.

## Licences

Because of legal restrictions, such as copyright, an appropriate *licence* (synonym of "authorization" and of "permission") is necessary for software freedom.

Free software licences are *public* (granted to anybody who receives a copy of the program). They are typically written as reusable documents, so as to prevent [proliferation](https://en.wikipedia.org/wiki/License_proliferation).

Most licences come under some *conditions* (only applying as long they are met), some of which are considered compatible with software freedom.

Requirements such as that of retaining attribution notices when distributing the program are permissible and widespread in free software licences, as are disclaimers of warranty and liability. On the other hand, restrictions against commercial use or which limit the [freedom to run the program](https://www.gnu.org/philosophy/programs-must-not-limit-freedom-to-run.html) cannot be part of a free licence.

The [FSF](https://www.gnu.org/licences/license-list.html) and [OSI](https://opensource.org/licences/) each maintain a list of free and open source licences. In general, however, few of them, such as the [MIT](https://opensource.org/license/mit/) licence, the [Apache 2.0](https://www.apache.org/licences/LICENSE-2.0) licence and the [GNU GPL](https://www.gnu.org/licences/), dominate the free software licensing landscape.

## Copyleft

Of all conditions that are permissible in a free software licence, [copyleft](https://www.gnu.org/licences/copyleft.html) (a mechanism pioneered by Stallman) is arguably the most restrictive, interesting and discussed one.

A copyleft licence allows distributing one's own modifications to the program only as free software, without additional restrictions. In essence, it ensures that software freedom is preserved when modified versions of the program are passed on.

Most free and open source licences are not copyleft licences. When, if ever, to use a copyleft licence is, ultimately, a matter of subjective choice.

Copyleft can be used strategically as a way to promote the release of free software by others. On the other hand, it can lead to licence [incompatibility](https://www.gnu.org/licences/license-compatibility.html), which may prevent mixing pieces of software under different licences.

## Remixing software

There are several ways in which software can be "remixed". These include, among others, *forks*, *libraries* and *patches*.

It's always possible to independently modify and then distribute a free program under the same licence. When doing so, one is creating a *fork*.

Programmers almost never start from scratch. A *library* is a collection of software modules which can be reused as components of larger programs.

Software is often developed cooperatively. Maintainers of a project can publish its source code online. Independent programmers can then contribute by sending *patches* (suggested modifications), which maintainers can choose to *merge* (apply) or not.

As a result of mutual cooperation and exercise of software freedom, one program can have hundreds of authors and copyright holders, each licencing one's own rights to the user. Those that decide to work together on the same software may each do so for widely different motives.

## Motivations

At this point in the article, you might be wondering why anyone would even write free software. There are plenty of motivations and this section will mention a few.

Software freedom is not anti-money. Indeed, the only business models it precludes are those that require restricting the user. Mant strategies exist to earn by releasing free software, which also happens to be good publicity (for a company) and, often, a way to get contributions from the community.

In the case of non-profit organizations seeking to make the world a better place and governments serving the interests of their citizens, software freedom is the obvious choice, as it maximizes utility.

Individuals have all sorts of non-monetary reasons to develop free software. The fun of coding is a strong motivator on its own. It can be a good learning experience, too. People can also choose to share programs out of altruism, to help others, or for ideological reasons.

People and organizations often contribute back to programs they themselves use, to their own benefit.

Software, like knowledge in any other form, can be shared infinitely without degrading or loosing it oneself.

Users don't need to concern themselves with the reasons any particular program was developed. As long as it is free, anyone can enjoy the benefits of software freedom.

## Advantages

Software freedom leads to many advantages for the user, such as:

- **Cost**: While free software doesn't have to be available at no charge, it typically is. Even when it isn't, multiple people can buy one copy and reproduce it among themselves.
- **Malleability**: Because free software can be modified, it can be customized to one's own needs.
- **Transparency**: Free software can be studied and its inner workings are no secret.
- **Security**: Computer security is not done through obscurity. When the source code is available, the absence of backdoors can be verified and accidental vulnerabilities can be reported and fixed.
- **Cooperation**: When working cooperatively on a project, free software is ideal because users can share it among themselves and don't all have to accept a proprietary licence.
- **Privacy**: Unless the very functionalities of the program require that it communicates through the network, free software can be privately used in secrecy. Privacy is control of one's data, and free software gives more control to the user.
- **Forkability**: Free software can be forked, allowing for different variants of the same program. When the maintainers of a given project abandon it, independent forks can be created, continuing to provide users with updates.
- **Dependability**: A free program never ceases to exist, because any user is allowed to retain copies for any length of time.
- **Versatility**: One can learn how to use a free program and later use it in unforeseen scenarios (such as when a hobby becomes a commercial endeavour), thanks to the unrestricted freedom to run it.
- **Interoperability**: Free programs use free file formats, which allows communication between different programs.

You can use free software the way you see fit, share it with others and, with the right tools, tweak it to your needs. You can run it privately, for any purpose, without yielding control to someone else. You can cooperate with others who don't want to be restricted either. A free program won't suddenly stop existing, nor will it force you to make an update you don't want. It won't make your files, your digital life, accessible only at the erratic whim of a third party, nor will it lock them behind the gate of a file format which can only be opened with the approval of some company.

When a piece of proprietary software is made available, it's only a step forward for its own rightsholders, because it's only "available" to those that accept their conditions. When a piece of free software is shared, however, when it is publicly shared of the world, it's a step forward for everyone.

The advantages of free software are relevant for individual users and also, possibly much more, for companies and enterprise users. They are, however, even greater for government-run institutions.

## Governments

Software freedom is especially important when it comes to government entities. It makes algorithms transparent and allows for independent audits. It helps states achieve technological sovereignty and stay in control of their processes and data. It fosters democracy because it doesn't shift power to the hands of software authors.

Free software is cheaper and, when new programs need to be developed, releasing them as free is a good use of public money for the common good. Furthermore, citizens often need to run software on their own devices for bureaucratic reasons. Forcing them to accept the terms of a proprietary licence would be an injustice.

Multiple [governments](https://opensource.org/authority/) have adopted policies on free and open source software.

The federal government of the United States runs an online [platform](https://www.code.gov/) where it shares open source software, in line with the [Federal Source Code Policy](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2016/m_16_21.pdf). This includes programs by the Department of Defense, which has a [FAQ](https://dodcio.defense.gov/open-source-software-faq/) document on open source and policies on the matter.

The *[Public Money? Public Code!](https://publiccode.eu/)* campaign, in Europe, asks for legislation requiring that publicly financed software developed for the public sector be published as free software.

The European Union has an [Open Source Software Strategy](https://commission.europa.eu/select-language?destination=/node/117) to leverage the transformative, innovative and collaborative power of open source. The strategy encourages sharing and reusing, to enrich society with better services while lowering costs. The EU has also written its own free and open source license: the [EUPL](https://eupl.eu/).

Italian law [requires](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82~art68) that public administrations consider free software solutions. It also [mandates](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82~art69) that they publish custom-built software as open source. [Agenzia per l'Italia Digitale](https://www.agid.gov.it/), an Italian public agency, has [guidelines](https://www.agid.gov.it/it/design-servizi/riuso-open-source/linee-guida-acquisizione-riuso-software-pa) on the matter, which reference the free software definition and the Open Source Initiative.

The Italian region of Piedmont has a [law](http://arianna.cr.piemonte.it/iterlegcoordweb/dettaglioLegge.do?urnLegge=urn:nir:regione.piemonte:legge:2009;9) on the adoption and diffusion of free software and portability of digital documents.

## Non-software assets

Software programs aren't the only digital assets that can be distributed under a free licence. Artworks, books, music and all sorts of other works are also subject to copyright.

The [Definition of Free Cultural Works](https://freedomdefined.org/Definition) and the [Open Definition](https://opendefinition.org/) (by the [Open Knowledge Foundation](https://okfn.org/)) independently provide definitions that can be used to establish which licences are "free" or "open". The relevant freedoms are the same as those for free and open source software, just translated out of the software domain.

[Creative Commons](https://creativecommons.org/) is a non-profit organization which writes public licences. Some of them are proprietary because they include non-free restrictions (such as those against commercial use or sharing derivative works), some are free.

Creative Commons [clarifies](https://creativecommons.org/2008/02/20/approved-for-free-cultural-works/) which, among its legal tools, are suitable for free cultural works. These include [CC0](https://creativecommons.org/publicdomain/zero/1.0/) (a public domain declaration), [CC BY](https://creativecommons.org/licences/by/4.0/) and [CC BY-SA](https://creativecommons.org/licences/by-sa/4.0/). Free licences for non-software works published by other organizations include the [Free Art License](https://artlibre.org/license/lal/en/) and the [GNU GPL](https://www.gnu.org/licences/licences.html) (which, while mainly designed for software, can also be used for other works).

The concept of "source code" exists for non-software assets too and it has the same meaning: the preferred form of the work for making modifications. It's arguably less fundamental than for software, though, since books and art pieces are intelligible to humans (and, with some effort, also modifiable) even when stored in other formats. Some copyleft free licences (such as the GNU GPL) require that access to source code is given when distributing a derivative, while others (such as CC BY-SA and the Free Art License) do not.

The same digital asset (for example, an image) can be stored in a computer file in many different *formats* that represent the same information differently. Some file formats can only be read using proprietary software (due to secrets or legal restrictions), constraining the user, while others can be dealt with using free and open source software. When distributing free cultural works, a free format should be preferred so as to avoid these restrictions.

## Examples

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

Besides high-level applications, you have probably heard of [Linux](https://www.kernel.org/): a free *kernel* (the core component of an operating system). Linux is used by Debian, by Android and by many more. It's an important part of the open source ecosystem.

As for free cultural content, [Wikipedia](https://www.wikipedia.org/) is a free (libre) encyclopedia: its articles are available under the [CC BY-SA](https://creativecommons.org/licences/by-sa/4.0/) licence.

## Additional resources

- *[What is Free Software?](https://www.gnu.org/philosophy/free-sw.html)* by the GNU Project
- *[The Open Source Definition](https://opensource.org/osd/)* by the Open Source Initiative
- *[Debian Free Software Guidelines](https://wiki.debian.org/DebianFreeSoftwareGuidelines)* by Debian
- *[Definition of Free Cultural Works](https://freedomdefined.org/Definition)* by Definition of Free Cultural Works
- *[The Open Definition](https://opendefinition.org/)* by the Open Knowledge Foundation
- *[Permissible restrictions](https://freedomdefined.org/Permissible_restrictions)* by Definition of Free Cultural Works
- *[Copyheart](https://copyheart.org/)* by Nina Paley
- *[Introduction to Free Software and the Liberation of Cyberspace](https://www.fsf.org/blogs/rms/20140407-geneva-tedx-talk-free-software-free-society/)* by Richard Stallman
- *[Why Software Should Not Have Owners](https://www.gnu.org/philosophy/why-free.html)* by Richard Stallman
- *[Why programs must not limit the freedom to run them
](https://www.gnu.org/philosophy/programs-must-not-limit-freedom-to-run.html)* by Richard Stallman
- *[Categories of Free and Nonfree Software](https://www.gnu.org/philosophy/categories.html)* by the GNU Project
- *[Selling Free Software](https://www.gnu.org/philosophy/selling.html)* by the GNU Project
- *[Goodbye, "free software"; hello, "open source"](http://www.catb.org/~esr/open-source.html)* by Eric Raymond
- *[The Revenge of the Hackers](http://catb.org/~esr/faqs/hacker-revenge.html)* by Eric Raymond
- *[On Usage of The Phrase "Open Source"](https://web.archive.org/web/20230506135235/https://perens.com/2017/09/26/on-usage-of-the-phrase-open-source/)* by Bruce Perens
- *[Blender is Free Software](https://code.blender.org/2019/06/blender-is-free-software/)* by Ton Roosendaal
- *[Happy birthday to GNU](https://www.gnu.org/fry/)* by Stephen Fry
- *[It's legal but unethical](https://justintadlock.com/archives/2013/08/19/its-legal-but-unethical)* by Justin Tadlock
- *[What Is The Spirit of Open Source?](https://haacked.com/archive/2012/02/22/spirit-of-open-source.aspx/)* by Phil Haack
- *[Let's Talk About Open Source](https://blog.sentry.io/lets-talk-about-open-source/)* by David Cramer
- *[Open Source is Not About You](https://gist.github.com/richhickey/1563cddea1002958f96e7ba9519972d9)* by Rich Hickey
