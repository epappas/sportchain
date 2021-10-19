package keeper

import (
	"github.com/cosmonaut/interchange/x/interdex/types"
)

var _ types.QueryServer = Keeper{}
