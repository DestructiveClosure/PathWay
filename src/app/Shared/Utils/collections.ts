
/** 
* Adds up one numeric value from every list item in a list.
* <T> Generic usage anmd it will work with any type
* Pick takes one item and returns the numebr to add
* @example 
* 
* const group = [
*   {name: "Tony", health: 80},
*   {name: "Anthony", health: 70}   
* ]
* 
* const totalHealth = sumBy(group, group => group.age);
* 
* @typeParam T the type of each item. It is inferred from `items`, so `pick` gets full autocomplete on
* the item without any annotation
* 
* @example sumBy(trails, t => t.distanceKm) 
*/

export function sumBy<T>(items: readonly T[], pick: (item: T) => number): number{
    return items.reduce((total, item) => total + pick(item), 0);
}

/**
 * Counts how many items fall under each key.
 *
 * @typeParam T The type of each item in the list.
 * @typeParam K extends string is the type of category or DIFFICULTY each item falls into. 
 * 
 *
 * @example countBy(trails, t => t.difficulty, DIFFICULTIES)
 *   // { easy: 3, moderate: 3, hard: 2 }
 */
export function countBy<T, K extends string>(
    // The array to count using readonly will promise that the function won't mutate the original array
  items: readonly T[],
  // Function that takes one item and returns its category
  key: (item: T) => K,
  // keys.map((k) => [k, 0]) turns each key into a [key, 0] pair, e.g. ["easy", 0]
  
  keys: readonly K[],
): Record<K, number> {
  // Object.fromEntries returns a loosely typed object. The assertion is safe
  // because we have just created an entry for every key in K.
  const counts = Object.fromEntries(keys.map((k) => [k, 0])) as Record<K, number>;
  for (const item of items) {
    counts[key(item)] += 1;
  }
  return counts;
}