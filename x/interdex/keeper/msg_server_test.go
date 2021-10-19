package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/cosmonaut/interchange/testutil/keeper"
	"github.com/cosmonaut/interchange/x/interdex/keeper"
	"github.com/cosmonaut/interchange/x/interdex/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.InterdexKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
