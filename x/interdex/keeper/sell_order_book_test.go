package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/cryptodata/interchange/testutil/keeper"
	"github.com/cryptodata/interchange/x/interdex/keeper"
	"github.com/cryptodata/interchange/x/interdex/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNSellOrderBook(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.SellOrderBook {
	items := make([]types.SellOrderBook, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetSellOrderBook(ctx, items[i])
	}
	return items
}

func TestSellOrderBookGet(t *testing.T) {
	keeper, ctx := keepertest.InterdexKeeper(t)
	items := createNSellOrderBook(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSellOrderBook(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestSellOrderBookRemove(t *testing.T) {
	keeper, ctx := keepertest.InterdexKeeper(t)
	items := createNSellOrderBook(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSellOrderBook(ctx,
			item.Index,
		)
		_, found := keeper.GetSellOrderBook(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestSellOrderBookGetAll(t *testing.T) {
	keeper, ctx := keepertest.InterdexKeeper(t)
	items := createNSellOrderBook(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllSellOrderBook(ctx))
}
