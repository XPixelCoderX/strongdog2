"use strict";

define([''], function () {
  //*******************************************************************************************************************
  // ** Passive Tree Data
  //*******************************************************************************************************************
  var passives = [{
    icon: 1,
    multis: [['arm', 1.35]]
  }, {
    icon: 2,
    added: [['mhp', 'hpr', 0.03]],
    tooltip: 'Restore 3% of Life per second.'
  }, {
    icon: 3,
    stats: [['cri', 3]],
    tooltip: 'Every 3rd attack is a Critical Strike.\nCritical Strike deals double damage.'
  }, {
    icon: 4,
    stats: [['irn', 200]],
    tooltip: 'Double Armor while\nfighting only one monster.'
  }, {
    icon: 6,
    stats: [['spl', 25]],
    tooltip: 'Basic attacks deal 25% of Damage\nto neighboring monsters.'
  }, {
    icon: 5,
    stats: [['ods', 135]],
    tooltip: '35% more Damage while\nfighting 3 or more monsters.'
  }, {
    icon: 7,
    multis: [['mhp', 1.3]]
  }, {
    icon: 8,
    stats: [['wcr', 160]],
    tooltip: '60% more Damage for\nthe first 3 seconds.'
  }, {
    icon: 9,
    multis: [['dmg', 1.7], ['aps', 0.7]],
    tooltip: '70% more Damage for\n30% less Atk Speed.'
  }, {
    icon: 10,
    stats: [['mes', 35]],
    tooltip: 'Gain 35% of Max Life\nas Energy Shield.\nEnergy shield prevents poison.'
  }, {
    icon: 11,
    stats: [['res', 35]],
    tooltip: 'When dropping below 40% Life\nfor first time, restore 35% Life.'
  }, {
    icon: 12,
    stats: [['swp', 5]],
    tooltip: 'Every 5th attack is a Sweep.\nSweep hits all monsters.'
  }, {
    icon: 13,
    stats: [['lfl', 2]],
    tooltip: 'Leech 2% of Damage dealt as Life.'
  }, {
    icon: 14,
    multis: [['dmg', 0.5]],
    stats: [['cas', 4]],
    tooltip: '50% less Damage.\nEvery 4th attack is a Fireball.\nFireball deals quadruple damage\nto all monsters.'
  }, {
    icon: 15,
    multis: [['aps', 1.15]]
  }, {
    icon: 16,
    stats: [['rev', 10]],
    tooltip: 'Upon first reaching 0 Life, revive\nwith 10% Life and stop monsters\nfor 2 seconds.'
  }, {
    icon: 17,
    stats: [['dod', 1]],
    tooltip: 'Dodge first special monster attack.\nSpecial attacks include Powerfull,\nPoison, Null and Weakening.'
  }, {
    icon: 18,
    multis: [['dmg', 1.08], ['mhp', 1.10], ['arm', 1.12]]
  }, {
    icon: 19,
    stats: [['wil', 20]],
    tooltip: '20% reduced Damage taken\nwhile below 50% Life.'
  }, {
    icon: 20,
    stats: [['ala', 3]],
    tooltip: 'Whenever defeating a monster,\ngain +3% Atk Speed for 2 seconds.'
  }, {
    icon: 21,
    multis: [['dmg', 1.25]]
  }, //*******************************************************************************************************************
  // * Page II
  //*******************************************************************************************************************
  {
    icon: 22,
    inc: [['mhp', 0.10], ['arm', 0.20]]
  }, {
    icon: 23,
    stats: [['vig', 2]],
    tooltip: 'Restore 2% of Life per second for\nthe first 3 seconds. Duration is\nrefreshed when defeating\na monster.'
  }, {
    icon: 24,
    stats: [['gdr', 2]],
    tooltip: '+2 seconds to Blue Goblet duration.'
  }, {
    icon: 25,
    stats: [['rec', 15]],
    tooltip: 'Every third floor, restore\nEnergy Shield equal to\n15% of Max life.'
  }, {
    icon: 26,
    multis: [['iir', 1.5]]
  }, {
    icon: 27,
    stats: [['atu', 15]],
    tooltip: '+15% Damage while fighting\non an even numbered floor.'
  }, {
    icon: 28,
    stats: [['fre', 1]],
    tooltip: 'Right click on a monster\nto cast Freeze on it.\nFreeze stops the monster\nfor 2 seconds.\nCan only be used once.'
  }, {
    icon: 29,
    inc: [['mhp', 0.20]],
    stats: [['aps', 6]]
  }, {
    icon: 30,
    stats: [['bld', 6]],
    tooltip: 'Gain 60% more Armor and\nLeech 6% of Damage dealt as Life\nwhile Blue Goblet is active.'
  }, {
    icon: 31,
    inc: [['mhp', 0.16], ['dmg', 0.08]]
  }, {
    icon: 32,
    stats: [['cau', 6000]],
    tooltip: 'Gain 6000 Armor while fighting\non an odd numbered floor.'
  }, {
    icon: 33,
    stats: [['std', 5]],
    tooltip: 'After not defeating any monsters\nfor 2 seconds, gain a buff that\ngrants +15% Damage and\n+30% Armor. Buff lasts 5 seconds.\nCan only be gained once.'
  }, {
    icon: 34,
    stats: [['men', 1]],
    tooltip: 'Cures Poisons and Weakness debuffs\nwhen Green Goblet is used.'
  }, {
    icon: 35,
    inc: [['dmg', 0.12], ['arm', 0.10]]
  }, {
    icon: 36,
    stats: [['sup', 1]],
    tooltip: 'Double click on a monster to\nperform a Cross Strike on it.\nCross Strike deals double damage.\nCan only be used once.'
  }, {
    icon: 37,
    stats: [['mhp', 10000]]
  }, {
    icon: 38,
    multis: [['mes', 1.15]],
    stats: [['ren', 100]],
    tooltip: '15% more Energy Shield.\nRestore all Energy Shield when\nthe Red Goblet is used.'
  }, {
    icon: 39,
    stats: [['bst', 15]],
    tooltip: '15% more Atk Speed while\nGreen Goblet is active.'
  }, {
    icon: 40,
    stats: [['abs', 6]],
    tooltip: 'Restore 6% Life whenever you\ndefeat a monster that has a mod.'
  }, {
    icon: 41,
    stats: [['rar', 1]],
    tooltip: 'Recharges the uses of Freeze\nand Cross Strike when the\nRed Goblet is used.'
  }, {
    icon: 42,
    stats: [['dmg', 2500]]
  }];
  return passives;
});