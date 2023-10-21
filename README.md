# REACT PIZZA STORE

/w react router, redux & tailwindcss
##BUSINESS REQUIREMENETS

- very simple application where users can order one or more pizzas from a menu
- requires no user accounts and no login users just input their names before using the app
- the pizza menu can change, so it should be loaded from an api
- users can add multipe pizzas to a cart before ordering
- ordering reqires just the users name phone numebr and address
- if possible gps location should be provided to make delivery easier
- users can mark their order as priority + 20% for an additional cart price
- orders are made by sending a post request with the order data (user data + selected pizzas to the api)
- payments are made on delivery so no payment processing is necessary
- each order will get a unique id that should be displayed so the user can later look up their order based on the id
- users should be able to mark their order as priority after ordering

## FEATURE CATEGORIES

- User
- Menu
- Cart
- Order

## PAGES

1.Homepage `/`
2.Menu `menu`
3.Cart `/cart`
4.Placing an order `order/new`
5.Looking up an order `order/:orderid`

## STATE

- User -> Global UI State
- Menu -> Global Remote State
- Cart -> Global UI State
- Order -> Global Remote State

## TECH DESCISSIONS

- React Router
- tailwindcss
- React Router (render as you fetch)
- Redux
