import { Container, Grid } from "@mui/material";
import Note from "../components/Note";
import useFetch from "../Hooks/useFetch";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    750: 1
  };

const Notes = () => {
    const {data:notes, isPending, error} = useFetch('http://localhost:8000/notes');

    return ( 
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
            {notes && notes.map(note => (
                <div key={note.id}>
                    <Note note={note}/>
                </div>
            ))}
        </Masonry>
     );
}
 
export default Notes;