package sportchain_test

import (
	"testing"

	keepertest "github.com/epappas/sportchain/testutil/keeper"
	"github.com/epappas/sportchain/x/sportchain"
	"github.com/epappas/sportchain/x/sportchain/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.SportchainKeeper(t)
	sportchain.InitGenesis(ctx, *k, genesisState)
	got := sportchain.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	// this line is used by starport scaffolding # genesis/test/assert
}
