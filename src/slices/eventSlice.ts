import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type{EventData} from "../modal/EventData.ts";
import {backendApi} from "../api.ts";
import axios from "axios";

interface EventState {
    eventList: EventData[];
    error: string | null | undefined;
}

const initialState: EventState = {
    eventList: [],
    error: null
}

export const getAllEvents = createAsyncThunk('events/getAllEvents', async () => {
    const response= await backendApi.get("/events/all");

    return await response.data;
})

const eventSlice = createSlice({
    name:'event',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllEvents.pending,()=>{
            alert("Events are still loading..");
        }).addCase(getAllEvents.fulfilled,(state: EventState,action: ReturnType<any>)=>{
            state.eventList=action.payload;
        }).addCase(getAllEvents.rejected,(state: EventState,action: ReturnType<any>)=>{
            state.error=action.error.message;
            alert("Error loading: "+state.error)
        })
    }
})

export const deleteEvent = createAsyncThunk("events/deleteEvent", async (id: string) => {
    const response = await backendApi.delete(`/events/${id}`);
    return id;
});

export const saveEvent = createAsyncThunk(
    "events/saveEvent",
    async (newEventData: EventData, thunkAPI) => {
        try {
            const response = await backendApi.post("/events/save", newEventData);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to save event");
        }
    }
);


export const updateEvent = createAsyncThunk(
    "events/updateEvent",
    async ({ id, ...updatedData }: { id: string } & Partial<EventData>, thunkAPI) => {
        const response = await backendApi.put(`/events/update/${id}`, updatedData);
        return response.data;
    }
);



export default eventSlice.reducer