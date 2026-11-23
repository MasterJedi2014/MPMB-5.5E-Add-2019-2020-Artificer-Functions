/*	-INFORMATION-
	Subject:	Class Feature
	Effect:		This script returns the 2019/2020 functions of the Lvl 1 "Tinker's Magic" & Lvl 14 "Magic Item Savant" Artificer class features to the 2024 Artificer.
				This script has been made by MasterJedi2014.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2026-11-22 (sheet v24.0.0)
*/

var iFileName = "5-5E Add 2019-2020 Artificer Functions [by MasterJedi2014] V1.js";
RequiredSheetVersion("24.0.0");

SourceList["MJ:HB"] = {
	name: "MasterJedi2014's Homebrew",
	abbreviation: "MJ:HB",
	date: "2021/1/1",
};

// Add options to include aspects from 2019/2020 Artificer for those that need them
AddFeatureChoice(ClassList.artificer.features["tinker's magic"], true, "Tinker's Magic: 2019/2020 Functions Added", {
    name: "Tinker's Magic: 2019/2020 Functions Added",
    extraname: "Artificer 1",
    source: [
        ["MJ:HB", 0],
        ["E:RLW", 55],
        ["T", 9]
    ],
    description: desc([
        "As a Magic action, I can alternatively use my Tinker's Magic to give 1 property to a nonmagical Tiny object:",
        " \u2022 Emit light (5-ft radius bright light, equal dim), an odor, or a nonverbal sound",
        " \u2022 Static visual effect on one surface, or emit a 6-second recorded message when tapped",
        "If I instill a property in more objects than I can have active, the oldest loses its property",
        "Each Tiny object I infuse with semi-permanent magic removes a usage from the maximum number of items I can temporarily produce via the Tinker's Magic rules from EFotA.",
    ]),
    prereqeval: function(v) {
        return classes.known.artificer.level >= 1 ? true : "skip";
    }
}, "1st-level Artificer Tinker's Magic choice");
AddFeatureChoice(ClassList.artificer.features["advanced artifice"], true, "Advanced Artifice: 2019/2020 Functions Added", {
    name: "Advanced Artifice: 2019/2020 Functions Added",
    extraname: "Artificer 14",
    source: [
        ["MJ:HB", 0],
        ["E:RLW", 58],
        ["T", 9]
    ],
    description: desc([
        "I additionally ignore all Class, Species, Spell, and Level requirements on attuning to or using a magic item",
    ]),
    prereqeval: function(v) {
        return classes.known.artificer.level >= 14 ? true : "skip";
    }
}, "14th-level Artificer Advanced Artifice choice");