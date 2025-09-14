import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RoleState {
  roles: any[];
}

const initialState: RoleState = {
  roles: [],
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRoles(state, action: PayloadAction<any[]>) {
      state.roles = action.payload;
    },
  },
});

export const { setRoles } = roleSlice.actions;
export default roleSlice.reducer;