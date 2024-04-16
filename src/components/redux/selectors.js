import { createSelector } from "@reduxjs/toolkit"

export const selectGoods = (state) => state.goods.goods
export const selectError = (state) => state.goods.error
export const selectLoading = (state) => state.goods.loading
 
export const filteredGoods = createSelector([selectGoods], (goods) => {
    return goods.filter(item=>item.category.id === 1)
})