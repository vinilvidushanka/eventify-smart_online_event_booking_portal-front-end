import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {ConcertData} from "../modal/ConcertData.ts";
import {backendApi} from "../api.ts";

interface ConcertState {
    concertList: ConcertData[];
    error: string | null | undefined;
}

const initialState: ConcertState = {
    concertList: [],
    error: null
}

export const getAllConcerts = createAsyncThunk('concerts/getAllConcerts', async () => {
    const response= await backendApi.get("/concerts/all");

    return await response.data;
})

const concertSlice = createSlice({
    name:'concert',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllConcerts.pending,()=>{
            alert("Concerts are still loading..");
        }).addCase(getAllConcerts.fulfilled,(state: ConcertState,action: ReturnType<any>)=>{
            state.concertList=action.payload;
        }).addCase(getAllConcerts.rejected,(state: ConcertState,action: ReturnType<any>)=>{
            state.error=action.error.message;
            alert("Error loading: "+state.error)
        })
    }
})

export const deleteConcert = createAsyncThunk("concerts/deleteConcert", async (id: string) => {
    const response = await backendApi.delete(`/concerts/${id}`);
    return id;
});

export const saveConcert = createAsyncThunk(
    "concerts/saveConcert",
    async (newConcertData: ConcertData, thunkAPI) => {
        try {
            const response = await backendApi.post("/concerts/save", newConcertData);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to save concert");
        }
    }
);

export const updateConcert = createAsyncThunk(
    "concerts/updateConcert",
    async ({ id, ...updatedData }: { id: string } & Partial<ConcertData>, thunkAPI) => {
        const response = await backendApi.put(`/concerts/update/${id}`, updatedData);
        return response.data;
    }
);

export default concertSlice.reducer