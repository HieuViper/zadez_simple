
export function moneyToString(money) {
    return money.toLocaleString('en-US').replace(/,/g, '.')
}