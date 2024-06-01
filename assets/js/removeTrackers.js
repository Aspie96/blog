"use strict";

// Script by Valentino Giudice.
// Public domain under the Unlicense: https://unlicense.org/

// Source of click identifiers list: https://github.com/mpchadwick/tracking-query-params-registry
// Public domain under the Unlicense: https://unlicense.org/

const blacklist = [
	"fbclid",
	"gclid",
	"gclsrc",
	"dclid",
	"gbraid",
	"wbraid",
	"twclid",
	"yclid",
	"utm_content",
	"utm_term",
	"utm_campaign",
	"utm_medium",
	"utm_source",
	"utm_id",
	"utm_source_platform",
	"utm_creative_format",
	"utm_marketing_tactic",
	"_ga",
	"_gl",
	"mc_cid",
	"mc_eid",
	"_bta_tid",
	"_bta_c",
	"trk_contact",
	"trk_msg",
	"trk_module",
	"trk_sid",
	"gdfms",
	"gdftrk",
	"gdffi",
	"_ke",
	"_kx",
	"redirect_log_mongo_id",
	"redirect_mongo_id",
	"sb_referer_host",
	"mkwid",
	"pcrid",
	"ef_id",
	"s_kwcid",
	"msclkid",
	"dm_i",
	"epik",
	"pk_campaign",
	"pk_kwd",
	"pk_keyword",
	"piwik_campaign",
	"piwik_kwd",
	"piwik_keyword",
	"mtm_campaign",
	"mtm_keyword",
	"mtm_source",
	"mtm_medium",
	"mtm_content",
	"mtm_cid",
	"mtm_group",
	"mtm_placement",
	"matomo_campaign",
	"matomo_keyword",
	"matomo_source",
	"matomo_medium",
	"matomo_content",
	"matomo_cid",
	"matomo_group",
	"matomo_placement",
	"hsa_cam",
	"hsa_grp",
	"hsa_mt",
	"hsa_src",
	"hsa_ad",
	"hsa_acc",
	"hsa_net",
	"hsa_kw",
	"hsa_tgt",
	"hsa_ver",
	"_branch_match_id",
	"mkevt",
	"mkcid",
	"mkrid",
	"campid",
	"toolid",
	"customid",
	"igshid",
	"si",
	"sms_source",
	"sms_click",
	"sms_uph",
	"ttclid",
	"ndclid",
	"ScCid"
];

const urlParams = new URLSearchParams(window.location.search);

if(blacklist.some(param => urlParams.has(param))) {
	const href = new URL(location.href);
	for(const param of blacklist) {
		href.searchParams.delete(param);
	}
	window.location.replace(href);
}
