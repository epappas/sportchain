package keeper

import (
	"github.com/epappas/sportchain/x/blog/types"
)

var _ types.QueryServer = Keeper{}
