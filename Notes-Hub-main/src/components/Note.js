import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { CardActions, CardContent, Typography } from '@mui/material';
import { EditNoteOutlined } from '@mui/icons-material';


const Note = ({note}) => {
    const handleDelete = () => {
        fetch('http://localhost:8000/notes/'+note.id, {method:'DELETE'})
        .then(()=>{
            window.location.reload();
        })
    };

    return ( 
        <Card>
            <CardHeader
                avatar={<Avatar>{note.category[0].toUpperCase()}</Avatar>}
                title={note.title}
                subheader={note.category}
                action={
                    <IconButton onClick={handleDelete}>
                        <DeleteOutlineOutlinedIcon/>
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant='body2'>
                    {note.body}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label='Pin to top'>
                    <EditNoteOutlined/>
                </IconButton>
                <Typography variant='caption' flexGrow={1} textAlign={'right'}>
                    {note.date}
                </Typography>
            </CardActions>
        </Card>
     );
}
 
export default Note;