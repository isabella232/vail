/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * For full license text, see the LICENSE file in the repo root
 */

import { DataSemantics } from '../api/dataSemantics/DataSemantics';

// Source: https://www.gapminder.org/data/

export const gapminderDatasource: DataSemantics = {
  country: {
    type: 'CGeo',
    stats: {
      dataType: 'text',
      domain: [
        'China',
        'India',
        'United States',
        'Indonesia',
        'Brazil',
        'Russia',
        'Pakistan',
        'Bangladesh',
        'Japan',
        'Nigeria',
        'Mexico',
        'Germany',
        'Vietnam',
        'Philippines',
        'Egypt',
        'Ethiopia',
        'Iran',
        'Turkey',
        'Thailand',
        'France',
        'United Kingdom',
        'Italy',
        'Ukraine',
        'Dem. Rep. Congo',
        'Myanmar',
        'South Africa',
        'Spain',
        'Colombia',
        'Poland',
        'Argentina',
        'Tanzania',
        'Algeria',
        'Kenya',
        'Canada',
        'Morocco',
        'Sudan',
        'Peru',
        'Uzbekistan',
        'Venezuela',
        'Uganda',
        'Nepal',
        'Iraq',
        'Malaysia',
        'Taiwan',
        'Romania',
        'Saudi Arabia',
        'Afghanistan',
        'Australia',
        'Ghana',
        'SriLanka',
      ],
    },
  },
  lifeExpectancy: { type: 'Qd', derivation: 'average', stats: { dataType: 'numeric', domain: [] } },
  fertilityRate: { type: 'Qd', derivation: 'average', stats: { dataType: 'numeric', domain: [] } },
  population: { type: 'Qd', derivation: 'average', stats: { dataType: 'numeric', domain: [] } },
  region: {
    type: 'CGeo',
    stats: {
      dataType: 'text',
      domain: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
    },
  },
  gdp: { type: 'CCurrency', derivation: 'average', stats: { dataType: 'numeric', domain: [] } },
};

export const gapminderData = [
  { country: 'China', lifeExpectancy: 71.5, fertilityRate: 1.45, population: 1269974572, region: 'East Asia & Pacific', gdp: 3678 },
  { country: 'India', lifeExpectancy: 61.1, fertilityRate: 3.21, population: 1053481072, region: 'South Asia', gdp: 2548 },
  { country: 'United States', lifeExpectancy: 77.1, fertilityRate: 2.01, population: 282895741, region: 'America', gdp: 45986 },
  { country: 'Indonesia', lifeExpectancy: 68.3, fertilityRate: 2.5, population: 211540428, region: 'East Asia & Pacific', gdp: 5878 },
  { country: 'Brazil', lifeExpectancy: 71.9, fertilityRate: 2.4, population: 175786441, region: 'America', gdp: 11461 },
  { country: 'Russia', lifeExpectancy: 65.4, fertilityRate: 1.16, population: 146400951, region: 'Europe & Central Asia', gdp: 13173 },
  { country: 'Pakistan', lifeExpectancy: 62.6, fertilityRate: 4.67, population: 138250487, region: 'South Asia', gdp: 3366 },
  { country: 'Bangladesh', lifeExpectancy: 65.8, fertilityRate: 3.23, population: 131280739, region: 'South Asia', gdp: 1632 },
  { country: 'Japan', lifeExpectancy: 81.1, fertilityRate: 1.34, population: 125714674, region: 'East Asia & Pacific', gdp: 32193 },
  { country: 'Nigeria', lifeExpectancy: 55.8, fertilityRate: 6.13, population: 122876723, region: 'Sub-Saharan Africa', gdp: 2836 },
  { country: 'Mexico', lifeExpectancy: 75.1, fertilityRate: 2.71, population: 102808590, region: 'America', gdp: 14704 },
  { country: 'Germany', lifeExpectancy: 78.1, fertilityRate: 1.35, population: 81895925, region: 'Europe & Central Asia', gdp: 36953 },
  { country: 'Vietnam', lifeExpectancy: 72.6, fertilityRate: 2.06, population: 80285563, region: 'East Asia & Pacific', gdp: 2650 },
  { country: 'Philippines', lifeExpectancy: 69.0, fertilityRate: 3.85, population: 77932247, region: 'East Asia & Pacific', gdp: 4243 },
  { country: 'Egypt', lifeExpectancy: 68.9, fertilityRate: 3.37, population: 68334905, region: 'Middle East & North Africa', gdp: 7807 },
  { country: 'Ethiopia', lifeExpectancy: 52.5, fertilityRate: 6.66, population: 66443603, region: 'Sub-Saharan Africa', gdp: 623 },
  { country: 'Iran', lifeExpectancy: 71.2, fertilityRate: 2.34, population: 65850062, region: 'Middle East & North Africa', gdp: 11719 },
  { country: 'Turkey', lifeExpectancy: 71.5, fertilityRate: 2.51, population: 63240157, region: 'Europe & Central Asia', gdp: 13025 },
  { country: 'Thailand', lifeExpectancy: 71.3, fertilityRate: 1.71, population: 62693322, region: 'East Asia & Pacific', gdp: 8939 },
  { country: 'France', lifeExpectancy: 79.1, fertilityRate: 1.8, population: 59387183, region: 'Europe & Central Asia', gdp: 34774 },
  {
    country: 'United Kingdom',
    lifeExpectancy: 77.8,
    fertilityRate: 1.69,
    population: 58867004,
    region: 'Europe & Central Asia',
    gdp: 32543,
  },
  { country: 'Italy', lifeExpectancy: 79.6, fertilityRate: 1.21, population: 57147081, region: 'Europe & Central Asia', gdp: 36073 },
  { country: 'Ukraine', lifeExpectancy: 67.5, fertilityRate: 1.16, population: 48746269, region: 'Europe & Central Asia', gdp: 4809 },
  { country: 'Dem. Rep. Congo', lifeExpectancy: 52.5, fertilityRate: 7.14, population: 48048664, region: 'Sub-Saharan Africa', gdp: 531 },
  { country: 'Myanmar', lifeExpectancy: 61.4, fertilityRate: 2.51, population: 47669791, region: 'East Asia & Pacific', gdp: 2069 },
  { country: 'South Africa', lifeExpectancy: 57.1, fertilityRate: 2.9, population: 44896856, region: 'Sub-Saharan Africa', gdp: 9927 },
  { country: 'Spain', lifeExpectancy: 79.3, fertilityRate: 1.21, population: 40749800, region: 'Europe & Central Asia', gdp: 30647 },
  { country: 'Colombia', lifeExpectancy: 72.5, fertilityRate: 2.68, population: 40403959, region: 'America', gdp: 8414 },
  { country: 'Poland', lifeExpectancy: 73.8, fertilityRate: 1.39, population: 38486305, region: 'Europe & Central Asia', gdp: 14565 },
  { country: 'Argentina', lifeExpectancy: 74.3, fertilityRate: 2.54, population: 37057453, region: 'America', gdp: 11504 },
  { country: 'Tanzania', lifeExpectancy: 54.8, fertilityRate: 5.71, population: 33991590, region: 'Sub-Saharan Africa', gdp: 1488 },
  { country: 'Algeria', lifeExpectancy: 73.2, fertilityRate: 2.63, population: 31183658, region: 'Middle East & North Africa', gdp: 9885 },
  { country: 'Kenya', lifeExpectancy: 57.4, fertilityRate: 5.03, population: 31065820, region: 'Sub-Saharan Africa', gdp: 2143 },
  { country: 'Canada', lifeExpectancy: 79.3, fertilityRate: 1.54, population: 30701903, region: 'America', gdp: 37314 },
  { country: 'Morocco', lifeExpectancy: 71.3, fertilityRate: 2.8, population: 28950553, region: 'Middle East & North Africa', gdp: 4430 },
  { country: 'Sudan', lifeExpectancy: 64.4, fertilityRate: 5.52, population: 28079664, region: 'Sub-Saharan Africa', gdp: 2258 },
  { country: 'Peru', lifeExpectancy: 74.3, fertilityRate: 2.99, population: 25914875, region: 'America', gdp: 6485 },
  { country: 'Uzbekistan', lifeExpectancy: 67.4, fertilityRate: 2.86, population: 24518222, region: 'Europe & Central Asia', gdp: 2471 },
  { country: 'Venezuela', lifeExpectancy: 74.3, fertilityRate: 2.87, population: 24481477, region: 'America', gdp: 14461 },
  { country: 'Uganda', lifeExpectancy: 50.0, fertilityRate: 6.9, population: 23757636, region: 'Sub-Saharan Africa', gdp: 1042 },
  { country: 'Nepal', lifeExpectancy: 64.9, fertilityRate: 4.21, population: 23740145, region: 'South Asia', gdp: 1577 },
  { country: 'Iraq', lifeExpectancy: 69.1, fertilityRate: 5.05, population: 23574751, region: 'Middle East & North Africa', gdp: 11764 },
  { country: 'Malaysia', lifeExpectancy: 73.8, fertilityRate: 2.96, population: 23420751, region: 'East Asia & Pacific', gdp: 15695 },
  { country: 'Taiwan', lifeExpectancy: 76.0, fertilityRate: 1.56, population: 22175667, region: 'East Asia & Pacific', gdp: 34205 },
  { country: 'Romania', lifeExpectancy: 70.8, fertilityRate: 1.28, population: 22128139, region: 'Europe & Central Asia', gdp: 9970 },
  {
    country: 'Saudi Arabia',
    lifeExpectancy: 76.1,
    fertilityRate: 4.19,
    population: 21392273,
    region: 'Middle East & North Africa',
    gdp: 37531,
  },
  { country: 'Afghanistan', lifeExpectancy: 51.0, fertilityRate: 7.81, population: 19701940, region: 'South Asia', gdp: 962 },
  { country: 'Australia', lifeExpectancy: 79.7, fertilityRate: 1.76, population: 19107251, region: 'East Asia & Pacific', gdp: 35253 },
  { country: 'Ghana', lifeExpectancy: 60.2, fertilityRate: 4.73, population: 18824994, region: 'Sub-Saharan Africa', gdp: 2273 },
  { country: 'SriLanka', lifeExpectancy: 72.4, fertilityRate: 2.24, population: 18783745, region: 'South Asia', gdp: 4946 },
];
