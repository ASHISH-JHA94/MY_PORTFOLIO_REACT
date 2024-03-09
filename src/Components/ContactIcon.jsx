import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LeetCodeIcon from '@mui/icons-material/School';
import GeeksforGeeksIcon from '@mui/icons-material/Code';

export default function ContactIcon(){
    return(
        <div className='flex flex-row  gap-8 md:gap-12'>
        <IconButton
        href="https://github.com/ASHISH-JHA94"
        target="_blank"
        title="GitHub"
        sx={{ '& svg': { fontSize: 50, color: 'black' } }}
        className='hover:scale-125 shadow-md shadow-black'
      >
        <GitHubIcon />
      </IconButton>
      
      <IconButton
        href="https://www.linkedin.com/in/ashish-jha-25854b256/"
        target="_blank"
        title="LinkedIn"
        sx={{ '& svg': { fontSize: 50, color: 'blue' } }}
        className='hover:scale-125 shadow-md shadow-black'
      >
        <LinkedInIcon />
      </IconButton>
      
      <IconButton
        href="https://leetcode.com/ashish_jha1234/"
        target="_blank"
        title="LeetCode"
        sx={{ '& svg': { fontSize: 45, color: 'yellow', backgroundColor: 'black' } }}
        className='hover:scale-125 shadow-md shadow-black'
      >
        <LeetCodeIcon />
      </IconButton>
      
      <IconButton
        href="https://auth.geeksforgeeks.org/user/ajha9yo0x/"
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