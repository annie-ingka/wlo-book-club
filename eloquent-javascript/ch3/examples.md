## NESTED LOOPS

When to use: when we want to traverse a list of a list

**EXAMPLE: print the allergens of a burger:**

```js
const burger = [
  {
    name: 'Patty',
    allergens: ['meat']
  },
  {
    name: 'Bun',
    allergens: ['gluten']
  },
  {
    name: 'Sauce',
    allergens: ['egg', 'lactose']
  }
];
```

## RECURSION

When to use: when the depth of the tree we want to traverse is large, variable or unknown

**EXAMPLE: create a family tree with the following data:**
const people = [
{
name: 'Alice',
children: [
{
name: 'Adam',
children: []
}
]
},
{
name: 'Bob',
children: [
{
name: 'Brian',
children: [
{
name: Briana,
children: []
}
]
}
]
}
];
