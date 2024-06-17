import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    currentPage: 1,
    totalPages: [],
    loading: true,
  },
  reducers: {
    setcurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    removePost: (state, action) => {
      state.items = state.items.filter((post) => post.id !== action.payload);
      state.totalPages = new Array(Math.ceil(state.items.length / 6)).fill();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchPosts.fulfilled,(state,action)=>{
        state.items = action.payload
        state.totalPages = new Array(Math.ceil(action.payload.length / 6)).fill()
        state.loading = false
    })
  },
});
export const { setcurrentPage, removePost } = postsSlice.actions;
export default postsSlice.reducer;
