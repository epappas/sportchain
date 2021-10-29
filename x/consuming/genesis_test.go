package consuming_test

import (
	"testing"

	keepertest "github.com/cryptodata/interchange/testutil/keeper"
	"github.com/cryptodata/interchange/x/consuming"
	"github.com/cryptodata/interchange/x/consuming/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		PortId: types.PortID,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ConsumingKeeper(t)
	consuming.InitGenesis(ctx, *k, genesisState)
	got := consuming.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Equal(t, genesisState.PortId, got.PortId)
	// this line is used by starport scaffolding # genesis/test/assert
}
