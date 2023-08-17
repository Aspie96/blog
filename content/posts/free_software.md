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

Programmers typically create software by writing *source code*, as text, in a *programming language*. It's a detailed description of the program which trained humans and computers alike can understand. It can be converted, trough *compilation*, into other forms that can only be read by computers: *object code*. The result is still the same program, just represented in a different way, which is usually more efficient. The reverse operation (going from object code to human-readable source code) is often hard, if not nearly impossible.

Legally, original literary and artistic works of authorship, such as poems and paintings, are covered by *copyright* (or "author's rights"). Copyright is automatic and it exists from the moment the work is first fixed in a material medium. In general, preparing derivatives based on an existing work, reproducing it in copies or conveying it to the public requires an authorization from the copyright holder and are illegal if unauthorized. Software programs are covered by [copyright](https://en.wikipedia.org/wiki/Software_copyright) as literary works.

Suppose you receive a program in object form. You cannot study its internal functioning in detail, because you don't have the corresponding source code to read. You could technically distribute copies (computers can always copy data), but you aren't legally allowed to do. You may be unable to modify the program to your liking for both legal and technical reasons.

Restrictions on software exist beyond just copyright and withholding source code. In an ever more digitalized world, they give rightholders a lot of power and substantial control on users.

## Free software

*Free software* is software which any user, in any field of endeavor, is free to run, copy, distribute, study and modify. This means that it is provided alongside with access to its source code, as well as an authorization to perform these actions.

In the '80s, the [GNU](https://www.gnu.org/) project, aimed at creating a free operating system, was [announced](https://www.gnu.org/gnu/initial-announcement.html) by [Richard Stallman](https://stallman.org/). Stallman then founded the [Free Software Foundation](https://www.fsf.org/), a non-profit organization, which supports GNU and other initiatives. The FSF also maintains the [free software definition](https://www.gnu.org/philosophy/free-sw.html), which is based on four *[essential freedoms](https://www.gnu.org/philosophy/free-sw.html#four-freedoms)*.

In "free software", the word "free" refers to freedom (as in "free speech"), not to price (as in "free beer"). This ambiguity is specific to the English language, which is why sometimes the Spanish and French word "libre" is used, instead of "free", to avoid confusion. In practice, free software typically happens to be distributed at no charge (partly because anyone that receives can also pass it on), but a lot of software available at no charge is not free software.

The *free software movement* supports software freedom on moral grounds, based on the idea that non-free software is controlled by its owner rather than the user and that this constitutes an instrument of unjust power over users' computing. It is, however, possible to use and endorse free software for more pragmatic reasons, even without agreeing with this philosophy.

## Open Source

*Open source* is the same as free software. The reason for the double name is historical.

[Eric Raymond](http://www.catb.org/~esr/) and [Bruce Perens](http://perens.com/) (leader, at the time, of the [Debian](https://www.debian.org/index.it.html) project, a free operating system, as successor of its founder [Ian Murdock](https://ianmurdock.com/)) started the [Open Source Initiative](https://opensource.org/) in 1998, as president and vice-president respectively. The idea was to promote free software under a different name, leveraging a more pragmatic approach.

The *open source movement*, based on utilitarianism, rather than moral dogma (like the free software movement), and often focused on cooperation and software quality, has been very successful in its goals, making open source software widespread.

The [Open Source Definition](https://opensource.org/definition-annotated/), maintained by OSI, is based on the [Debian Free Software Guidelines](https://www.debian.org/social_contract#guidelines) (also written by Perens). It is equivalent, in substance, to the FSD by the FSF, expressing the same concepts with different words and a different structure.

Sometimes the phrase "free and open source software" is used to remain neutral between the two alternatives. It can also be shortened as "FOSS" or "[FLOSS](https://www.gnu.org/philosophy/floss-and-foss.html)" (where the L stands for "libre"). "Free software" and "open source" can be used interchangeably to refer to the same class of programs, as the Debian community currently does.

Open source is not to be confused with software which is merely *source available*. Whenever source code is provided, the program is indeed source available, but, in order for it to be open source, an appropriate software license, one which grants software freedom, is necessary.

## Licenses

In order to exercise software freedom, a user needs to be allowed, by the rightholders of the program, to do so, trough a *license* (synonym of "authorization" and of "permission").

Free software licenses are *public licenses* (granted to anyone who receives a copy of the program) written as reusable documents. In principle, anyone could write one's own, but it's strongly recommended against, in order to prevent [proliferation](https://en.wikipedia.org/wiki/License_proliferation).

Most licenses come under some *conditions* (only applying as long as long as they are met). Certain restrictions are considered compatible with software freedom.

Conditions such as that of retaining attribution notices when distributing the program are permissible and widespread in free software licenses, as are disclaimers of warranty and liability. On the other hand, restrictions against commercial use or uses which the author abhors for moral or political reasons can never be part of a free software license, especially when they limit the [freedom to run the program](https://www.gnu.org/philosophy/programs-must-not-limit-freedom-to-run.html).

The [FSF](https://www.gnu.org/licenses/license-list.html) and [OSI](https://opensource.org/licenses/) each maintain a list of free and open source software licenses. In general, however, few of them, such as the [MIT](https://opensource.org/license/mit/) license, the [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) license, the [GNU GPL](https://www.gnu.org/licenses/) and some others, dominate the free software licensing landscape.

## Copyleft

Of all restrictions that are permissible in a free software license, [copyleft](https://www.gnu.org/licenses/copyleft.html) is arguably the most restrictive, interesting and discussed one.

A copyleft license allows distributing one's own modifications to the program only as free software, without additional restrictions. In essence, it ensures that software freedom is preserved when modified versions of the program are passed on.

Most free and open source licenses are not copyleft licenses. When, if ever, to use a copyleft license is, ultimately, a matter of subjective choice.

Copyleft can be used strategically as a way to promote the release of free software by others. On the other hand, it can lead to license [incompatibility](https://www.gnu.org/licenses/license-compatibility.html), which may prevent mixing pieces of software under different licenses.

## Remixing software

There are several ways in which software can be "remixed". These include, amongst others, *forks*, *libraries* and *patches*.

It's always possible to independently modify and then distribute a free program under the same license. When doing so, one is creating a *fork*.

Programmers almost never start from scratch. A *library* is a collection of software modules which can be reused as components of larger programs.

Software is often developed cooperatively. Maintainers of a project can publish its source code online. Independent programmers can then contribute by sending *patches* (suggested modifications), which maintainers can choose to *merge* (apply) or not.

As a result of mutual cooperation and exercise of software freedom, one program can have hundreds of authors and copyright holders. Each licenses one's own rights (to the respective portions of the program) to the user.

## Motivations

At this point in the article, you might be wondering why anyone would actually develop free software. There are plenty of motivations and this section will mention a few.

Software freedom is not anti-business and it's not anti-money. Indeed, the only business models it precludes are those that require restricting the user. Many business models are perfectly consistent with releasing free software, which also happens to be good publicity for the company and, often, a way to get contributions from the community. In some cases, companies that want to release a program can only do so as free software because of copyleft.

Whilst making money by developing free software is possible, for-profit companies are not the only ones doing so. For non-profit organizations seeking to make the world a better place and governments serving the interests of their citizens, software freedom is the obvious choice.

Individuals can earn by writing free software, but it's common to do it for entirely different reasons. For many, writing code is fun and this is a strong motivator on its own. It can be a good learning experience, too. People can also choose to share code out of altruism, to help others, or for ideological reasons.

Companies and individuals alike often contribute to programs they themselves use. Making improvements available upstream, so that they can be included in future versions of the software, can be much more efficient than having to patch it each time. Indeed, cooperative development is cheaper because efforts aren't duplicated.

## Advantages

Software freedom leads to many advantages for the user, such as:

- *Cost*: While free software doesn't have to be available at no charge, it typically is. Even when it isn't, multiple people can buy one copy and reproduce it among themselves, perfectly legally and morally.
- *Malleability*: Because free software can be modified, it can be customized to one's own needs.
- *Transparency*: Free software can be studied and its inner workings are no secret.
- *Security*: Computer security is not done trough obscurity. When the source code is available, the absence of backdoors can be verified and accidental vulnerabilities can be reported and fixed.
- *Cooperation*: When working cooperatively on a project, free software is ideal because users care share it among themselves and use it without being encumbered by a proprietary license.
- *Privacy*: Unless the very functionalities of the program require that it communicates trough the network, free software can be privately used in secrecy. Privacy is control of one's data, and free software gives more control to the user.
- *Forkability*: Free software can be forked, allowing for different variants of the same program. When the maintainers of a given project abandon it, independent forks can be created, continuing to provide users with updates.
- *Dependability*: A free program never ceases to exist, because any user is allowed to retain copies for any length of time.
- *Versatility*: One can learn how to use a free program and later use it in unforeseen scenarios (such as when a hobby becomes a commercial endeavor), thanks to the unrestricted freedom to run it.
- *Interoperability*: Free program use free file formats, which allows communication between different programs.

You can use free software the way you see fit, share it with others and, with the right tools, tweak it to your needs. You can run it privately, for any purpose, without yielding control to someone else. You can cooperate with others who don't want to be restricted either. A free program won't suddenly stop existing, nor will it force you to make an update you don't want. It won't make your files, your digital life, accessible only at the erratic whim of someone else, nor will it lock them behind the gate of a file format which can only be opened with the approval of some company.

When a piece of proprietary software is made available, this is only a step forward for its own rightsholders, because it's only "available" to those that accept their conditions. When a piece of free software is shared, however, when it is publicly shared of the world, this is a step forward for everyone.

The advantages of free software are relevant for individual users and also, possibly much more, for companies and enterprise users. They are, however, even greater for government-run institutions.

## Governments and free software

Software freedom is especially important when it comes to government entities.

Transparency and security are critical. Furthermore, a free license allows public institutions to act according to laws and internal policies, rather than bending to the interests of software authors.

The way in which the government operates should be decided trough the democratic process, not limited by proprietary software licenses which would shift power in the hands of rightholders.

It is in the interest of legislators and authorities to keep the sovreingnty of the State.

Countires do not need software authors to restrict certain actions, such as those which they abhor for moral or political reasons (a clause incompatible with software freedom). They already have the power to legislate in their own jurisdiction. Anything they aren't allowed to prohibit (for example, for constitutional reasons), they shouldn't forbid trough some kind of back door.

Whether the government should perform any given action should be decided trough the democratic process

Often citizens need to run software on their own devices for bureaucratic reasons. Forcing them to accept the terms of a proprietary license would be an injustice.

Software freedom is healthy for democracy in a free society.

https://opensource.org/authority/

The European Union has an [Open Source Software Strategy](https://commission.europa.eu/select-language?destination=/node/117) to leverage the trasformative, innovative and collaborative power of free and open source software. The strategy encourages sharing and reusing, to enrich society with better services while lowering costs.

The European Union recognizes the role that free and open source software has in


invigorating its social market economy, promoting
competition and encouraging small and medium-sized enterprises. We want to bring Europe’s
people together in an inclusive, open approach, to find new opportunities and transition to an inclusive,
better digital environment that is ready for the realities of today’s global economy.

https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2015-08-07;124!vig=2020-02-05
https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2017-12-13;217!vig=


Italian law mentions free and open source software multiple times. It [requires](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82~art68) that public administrations favor free software solutions. It also [mandates](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82~art69) that they publish custom-built software as open source. [Agenzia per l'Italia Digitale](https://www.agid.gov.it/), an Italian public agency, has [guidelines](https://www.agid.gov.it/it/design-servizi/riuso-open-source/linee-guida-acquisizione-riuso-software-pa) on software acquisition and reuse by public administrations, which reference the free software definition and the Open Source Initiative.


Thanks to software freedom, governments can uphold copyright and still exercise their sovereignty in determining the policies that need to be followed, and exactly what can and cannot be done within the borders of their jurisdictions, without giving excessive control or de-facto authority to software authors.

## Non-software assets

Software programs aren't the only digital assets that can be distributed under a free license. Artworks, books, music and all sorts of other works are also subject to copyright.

The [Definition of Free Cultural Works](https://freedomdefined.org/Definition) and the [Open Definition](https://opendefinition.org/) (by the [Open Knowledge Foundation](https://okfn.org/)) independently provide definitions that can be used to establish which licenses are "free" or "open". The relevant freedoms are the same as those for free and open source software, just translated out of the software domain.

[Creative Commons](https://creativecommons.org/) is a nonprofit organization which writes public licenses. Some of them are proprietary because they include non-free restrictions (such as those against commercial use or sharing derivative works), some are free.

Creative Commons [clarifies](https://creativecommons.org/2008/02/20/approved-for-free-cultural-works/) which, among its legal tools, are are suitable for free cultural works. These include [CC0](https://creativecommons.org/publicdomain/zero/1.0/) (a public domain declaration), [CC BY](https://creativecommons.org/licenses/by/4.0/) and [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). Free licenses for non-software works published by other organizations also exist, such as the [Free Art License](https://artlibre.org/licence/lal/en/) and the [GNU GPL](https://www.gnu.org/licenses/licenses.html) (which, while mainly designed for software, can also be used for other works).

The concept of "source code" exists for non-software assets too and it has the same meaning: the preferred form of the work for making modifications. It's arguably less fundamental than for software, though, since books and art pieces are intelligible to humans (and, with some effort, also modifiable) even when stored in other formats. Some copyleft free licenses (such as the GNU GPL) require that access to source code is given when distributing a derivative, while others (such as CC BY-SA and the Free Art License) do not.

The same digital asset (for example, an image) can be stored in a computer file in many different *formats* that represent the same information differently. Some file formats can only be read using proprietary software (due to secrets or legal restrictions), constraining the user, while others can be dealt with using free and open source software. When distributing free cultural works, it's important to use a free format, so as to avoid these restrictions.

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
- *[The Open Definition](https://opendefinition.org/)* by the Open Knowledge Foundation
- *[Permissible restrictions](https://freedomdefined.org/Permissible_restrictions)* by Definition of Free Cultural Works
- *[Introduction to Free Software and the Liberation of Cyberspace](https://www.fsf.org/blogs/rms/20140407-geneva-tedx-talk-free-software-free-society/)* by Richard Stallman
- *[Categories of Free and Nonfree Software](https://www.gnu.org/philosophy/categories.html)* by the GNU Project
- *[Goodbye, "free software"; hello, "open source"](http://www.catb.org/~esr/open-source.html)* by Eric Raymond
- *[The Revenge of the Hackers](http://catb.org/~esr/faqs/hacker-revenge.html)* by Eric Raymond
- *[On Usage of The Phrase "Open Source"](https://web.archive.org/web/20230506135235/https://perens.com/2017/09/26/on-usage-of-the-phrase-open-source/) by Bruce Perens
- *[Why Software Should Not Have Owners](https://www.gnu.org/philosophy/why-free.html)* by Richard Stallman
- *[Selling Free Software](https://www.gnu.org/philosophy/selling.html)* by the GNU Project
- *[Happy birthday to GNU](https://www.gnu.org/fry/)* by Stephen Fry
- *[What Is The Spirit of Open Source?](https://haacked.com/archive/2012/02/22/spirit-of-open-source.aspx/)* by Phil Haack
- *[Let's Talk About Open Source](https://blog.sentry.io/lets-talk-about-open-source/)* by David Cramer
- *[Open Source is Not About You](https://gist.github.com/richhickey/1563cddea1002958f96e7ba9519972d9)* by Rich Hickey
