import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LeetCodeIcon from '@mui/icons-material/School';
import GeeksforGeeksIcon from '@mui/icons-material/Code';

export default function ContactIcon(){
    return(
        <div className='flex flex-row  gap-8 md:gap-12'>
        <IconButton
        href="https://github.com/ASHISH-JHA94/Wanderlust.git"
        target="_blank"
        title="GitHub"
        sx={{ '& svg': { fontSize: 50, color: 'black' } }}
        className='hover:scale-125 shadow-md shadow-black'
      >
        <GitHubIcon />
      </IconButton>
      
      <IconButton
        href="YOUR_LINKEDIN_URL"
        target="_blank"
        title="LinkedIn"
        sx={{ '& svg': { fontSize: 50, color: 'blue' } }}
        className='hover:scale-125 shadow-md shadow-black'
      >
        <LinkedInIcon />
      </IconButton>
      
      <IconButton
        href="YOUR_LEETCODE_URL"
        target="_blank"
        title="LeetCode"
        sx={{ '& svg': { fontSize: 45, color: 'yellow', backgroundColor: 'black' } }}
        className='hover:scale-125 shadow-md shadow-black'
      >
        <LeetCodeIcon />
      </IconButton>
      
      <IconButton
        href="YOUR_GFG_URL"
        target="_blank"
        title="GeeksforGeeks"
        sx={{ '& svg': { fontSize: 50, color: 'green' } }}
        className='hover:scale-125 shadow-md shadow-black'
      >
        <GeeksforGeeksIcon />
      </IconButton>
        </div>
    )
}