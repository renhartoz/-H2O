import React from 'react';
import { Box, Typography, Link, Grid2, Divider, Stack } from '@mui/material';

const Footer = () => {
    return (
        <Stack
            component="footer"
            sx={{
                backgroundColor: "black_ocean.main",
                padding: "20px 0",
                marginTop: "auto",
                borderTop: "1px solid #ddd",
            }}
        >
            <Grid2 container spacing={10} justifyContent="space-evenly" alignItems={'center'}>
                <Grid2 xs={12} sm={4} textAlign="center">
                    <Stack direction={'row'} alignItems={'baseline'} gap={1}>
                        <i className="ri-discord-fill" style={{ fontSize: 30 }} />
                        <Typography variant="h6" gutterBottom fontSize={25} color='#fff'>
                            Discord
                        </Typography>
                    </Stack>
                    <Box>
                        <Link
                            href="https://discordapp.com/users/793773283451469844"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            renhartoz
                        </Link>
                    </Box>
                    <Box>
                        <Link
                            href="https://discordapp.com/users/718705815917297674"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            benhal_25
                        </Link>
                    </Box>
                    <Box>
                        <Link
                            href="https://discordapp.com/users/1269331850799742997"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            natalius_g
                        </Link>
                    </Box>
                </Grid2>

                <Grid2 xs={12} sm={4} textAlign="center">
                    <Stack direction={'row'} alignItems={'baseline'} gap={1}>
                        <i className="ri-github-fill" style={{ verticalAlign: 'middle', fontSize: 30 }} />
                        <Typography variant="h6" gutterBottom fontSize={25} color='#fff'>
                            GitHub Profiles
                        </Typography>
                    </Stack>
                    <Typography>
                        <Link
                            href="https://github.com/44120N"
                            target="_blank"
                            rel="noopener"
                            underline="hover"
                        >
                            @44120N
                        </Link>
                    </Typography>
                    <Typography>
                        <Link
                            href="https://github.com/Benedict02"
                            target="_blank"
                            rel="noopener"
                            underline="hover"
                        >
                            @Benedict02
                        </Link>
                    </Typography>
                    <Typography>
                        <Link
                            href="https://github.com/natalius-g"
                            target="_blank"
                            rel="noopener"
                            underline="hover"
                        >
                            @natalius-g
                        </Link>
                    </Typography>
                </Grid2>

                <Grid2 xs={12} sm={4} textAlign="center">
                    <Stack direction={'row'} alignItems={'baseline'} justifyContent={'center'} gap={1}>
                        <i className="ri-mail-fill" style={{ verticalAlign: 'middle', fontSize: 30 }}/>
                        <Typography variant="h6" gutterBottom fontSize={25} color='#fff'>
                            Emails
                        </Typography>
                    </Stack>
                    <Typography>
                        <Link
                            href="mailto:aaronhartono28@gmail.com"
                            underline="hover"
                        >
                            aaronhartono28@gmail.com
                        </Link>
                    </Typography>
                    <Typography>
                        <Link
                            href="mailto:benedicthalim1@gmail.com"
                            underline="hover"
                        >
                            benedicthalim1@gmail.com
                        </Link>
                    </Typography>
                    <Typography>
                        <Link
                            href="mailto:nataliusgabriel@gmail.com"
                            underline="hover"
                        >
                            nataliusgabriel@gmail.com
                        </Link>
                    </Typography>
                </Grid2>
            </Grid2>

            <Divider
                sx={{ margin: "20px 0", borderColor: "dark_ocean.main" }}
            />

            <Box textAlign="center">
                <Typography variant="body2" color="white.main">
                    &copy; {new Date().getFullYear()} Node at 25:00. All rights
                    reserved.
                </Typography>
            </Box>
        </Stack>
    );
};

export default Footer;
