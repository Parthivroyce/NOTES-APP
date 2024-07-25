import { Box, Button, MenuItem, Typography } from "@mui/material";
import { TextField,Container } from "@mui/material"
import { format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const noteCategories = [
    {
        label:"Work",
        value:"Work"
    },
    {
        label:"Educational",
        value:"Educational"
    },
    {
        label:"Health",
        value:"Health"
    },
    {
        label:"Home",
        value:"Home"
    },
    {
        label:"Other",
        value:"Other"
    }
];

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [category,setCategory] = useState('');
    const [isPending,setIsPending] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title === '' || body === '' || category === ''){
            return
        }
        setIsPending(true);
        const date = format(new Date(), 'dd/MM/yyyy');
        const note = {title, body, category, date};

        fetch(' http://localhost:8000/notes',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(note)
        })
        .then(()=>{
            setIsPending(false);
            navigate('/');
        })
        
    };

    return ( 
        <div className="create">
            <Container maxWidth={'xs'} sx={{paddingY:2}}>
                <Typography variant="h5" marginTop={2} textAlign={'center'} fontWeight={500}>
                    Add A New Note!
                </Typography>
                <form noValidate autoComplete="off">
                    <TextField
                        label = "Title"
                        variant="outlined"
                        required
                        fullWidth
                        margin="normal"
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <TextField
                        label = "Note"
                        variant="outlined"
                        required
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        onChange={(e)=>setBody(e.target.value)}
                    />
                    <TextField
                        select
                        label = "Category"
                        variant="outlined"
                        required
                        fullWidth
                        margin="normal"
                        onChange={(e)=>setCategory(e.target.value)}
                    >
                        {noteCategories.map(catg=>(
                            <MenuItem key={catg.value} value={catg.value}>
                                {catg.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Box textAlign={'center'}>
                        {!isPending &&
                        (<Button variant="contained" sx={{width:1/2, mt:2}} onClick={handleSubmit}>
                            Submit
                        </Button>)}
                        {isPending &&
                        (<Button variant="contained" disabled sx={{width:1/2, mt:2}}>
                            Processing...
                        </Button>)}
                    </Box>
                </form>
            </Container>
        </div>
     );
}
 
export default Create;