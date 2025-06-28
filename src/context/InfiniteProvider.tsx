import React, { createContext, Dispatch, useReducer } from "react"
import { TMovies } from "../components/hero/Hero"

type StateType = {
    allData: TMovies[] | [];
    filterData: TMovies[] | [];
};
type FilterPayload = Record<"year" | "rating" | "search", string>;

type ActionType =
    | { type: "ADD"; payload: TMovies[] }
    | { type: "FILTER"; payload: FilterPayload };

type ContextType = {
    state: StateType;
    dispatch: Dispatch<ActionType>;
};

const initialState: StateType = { allData: [], filterData: [] }
const reducer = (state: StateType, action: ActionType): StateType => {
    const copyState = { ...state }

    switch (action.type) {
        case "FILTER":
            const all_data = copyState.allData;
            const { year, rating, search } = action.payload;

            const isEmpty = !year && !rating && !search;

            if (isEmpty) {
                copyState.filterData = [];
            } else {
                const filtered_data = all_data.filter((item: TMovies) => {
                    const year_filter =
                        year !== "" && new Date(item.release_date).getFullYear() === Number(year) ;

                    const rating_filter =
                        rating !== "" && item.vote_average === Number(rating) ;

                    const search_filter =
                        search !== "" && item.original_title.toLowerCase().includes(search.toLowerCase()) ;

                    if(year_filter || rating_filter || search_filter) return item
                    
                });
                copyState.filterData = filtered_data;
            }

            break;
        case "ADD":
            if (action.payload) {
                copyState.allData = [...copyState.allData, ...action.payload]
            }
            break;

        default:
            break;
    }

    return copyState;
}


export const InfiniteContext = createContext<ContextType>({
    state: initialState,
    dispatch: () => { },
});

function InfiniteProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <InfiniteContext.Provider value={{ state, dispatch }}>

            {children}

        </InfiniteContext.Provider>
    )
}

export default InfiniteProvider