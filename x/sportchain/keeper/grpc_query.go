package keeper

import (
	"github.com/epappas/sportchain/x/sportchain/types"
)

var _ types.QueryServer = Keeper{}
