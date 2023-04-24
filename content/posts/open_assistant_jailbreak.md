---
title: "Open_Assistant_jaiblreak"
date: 2023-01-04T19:54:01+01:00
draft: false
lastmod: 2023-01-07T19:54:01+01:00
---

## Open Assistant

[Open Assistant](https://open-assistant.io/) is a free and open source chat-based AI assistant which exploits the functionality of large language models. It exists thanks to the non-profit [LAION](https://laion.ai/), to a wold-wide [team](https://open-assistant.io/team) of independent developers lead by [Andreas Köpf](https://github.com/andreaskoepf) and [Yannic Kilcher](https://www.ykilcher.com/) and to the data volunteered by [users](https://open-assistant.io/leaderboard). OA serves as an alternative to [ChatGPT](https://chat.openai.com/) by OpenAI which, despite the name of the company, remains private behind closed doors, accessible only trough an API.

Multiple [variations](https://huggingface.co/OpenAssistant) of Open Assistant exist, based on different underlying models. Of course, only those based on genuinely open source models are themselves open source. Most notably, variations of OA based on [Llama](https://ai.facebook.com/blog/large-language-model-llama-meta-ai/), by Meta (Facebook's company) are not open source because Llama models, contrary to what is often claimed, are not provided under an open source license. Variations of OA based on [Pythia](https://www.eleuther.ai/artifacts/pythia) by the [EleutherAI](https://www.eleuther.ai/) non-profit, on the other hand, are fully open source and can be downloaded, distributed, used, studied and tweaked by anyone for any purpose whatsoever, commercial or otherwise.

## Self-censorship

ChatGPT is notorious for limiting the scope and language of its conversations with users, often against the wishes of users themselves, in order, according to itself, to follow "ethical guidelines", avoid "harmful content" and provide "respectful information". "As an AI language model" (followed by something that applies to itself specifically and not to AI models in general, as the phrase would imply) is often how ChatGPT begins a non-response which rejects the request of the user on these grounds.

These refusals never help the user and do nothing but reduce the utility of the tool. One would expect Open Assistant to be better than that and, indeed, it is.

Users contributing to the OASST dataset were (and still are) supposed to follow certain [guidelines](https://projects.laion.ai/Open-Assistant/docs/guides/guidelines). The rules are very permissive in regards to what is allowed. Generally, they maximize utility for the user, while minimizing legal risks for the project (which could endanger its progress or existence). Forbidden content includes:

- Text copied from other sources.
- Encouragement of violence, violating the rights of others or pedophilia.
- Information which can be used for self-harm if it's suspected that the user intends to self-harm.
- Violation of the law of Germany (where LAION is set), the UK or the USA.

Anything which isn't forbidden is, in principle, fair game. Indeed, almost everything in the guidelines (with the exception of the aforementioned restrictions) encourages a cooperative and submissive behavior by the model. Open Assistant is not supposed to provide unsolicited opinions or dodge questions (except when the answer would be a prohibited one). It is supposed to talk in a friendly and approachable manner, but only if not requested to do otherwise.

Yet, Open Assistant often still refuses to answer prompts which, while possibly somewhat "spicy", do not call for a forbidden answer. This is unexpected, and it is an issue the exact cause of which isn't clear to me, but which is worthy of being fixed. The following are real quotes from answers by Open Assistant ([this](https://huggingface.co/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5) Pythia-based version, fully open source):
