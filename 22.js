// /**
// You are given an array song where each element is a 2-element array:
// Code Example
//  Song Name (string) – title of the song.
// duration (string) – formatted as "M:SS" (minutes : seconds).
// Example: "3:00" means 3 minutes 0 seconds.
// Write a function that returns exactly two distinct pairs of song names such that:
// 1.  The total duration of each pair is exactly 7 minutes 0 seconds (“7:00”).
// 2.  No song appears in more than one pair (pairs are non-overlapping).
// 3.  If multiple valid answers exist, you may return anyone.
// 4.  If fewer than two non-overlapping pairs exist, return an empty list.
//  **/
// // Sample Input:

// //Output
// [
//     ["My name is John Doe.", "Goodbye"],   
// ]
// //3:00 + 4:00 = 7:00
// //or
// [
//     ["Afternoon", "Nightfall"]            
// ]
// // 3:30 + 3:30 = 7:00




function toSeconds(duration) {
    const [min, sec] = duration.split(':').map(Number);
    return min * 60 + sec;
}

function distinct(songs) {
    const target = 7 * 60; 
    const n = songs.length;
    const pairs = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (toSeconds(songs[i][1]) + toSeconds(songs[j][1]) === target) {
                pairs.push([[songs[i][0], songs[j][0]], new Set([i, j])]);
            }
        }
    }


    for (let a = 0; a < pairs.length; a++) {
        for (let b = a + 1; b < pairs.length; b++) {
            const setA = pairs[a][1];
            const setB = pairs[b][1];
            const overlap = [...setA].some(idx => setB.has(idx));
            if (!overlap) {
                return [pairs[a][0], pairs[b][0]];
            }
        }
    }
    return [];
}

const songs = [
    ["My name is John Doe.", "3:00"],
    ["Hello World", "2:30"],
    ["Goodbye", "4:00"],
    ["Sunrise", "1:30"],
    ["Nightfall", "3:30"],
    ["Afternoon", "3:30"],
]

console.log(distinct(songs));


