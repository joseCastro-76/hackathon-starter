import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    rootGrid: {
        flexGrow: 1,
        minWidth: '100%',
    },
}));

export default function SimpleSelect(props) {
    const classes = useStyles();
    
    const { data: countries, loading, error } = props.countries;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <div className={ classes.rootGrid }>

            <FormControl variant="outlined" className={ classes.formControl }>

                <InputLabel id="country">Country</InputLabel>
                <Select
                    labelId="country"
                    id="country"
                    value={ props.selectedCountry }
                    onChange={ props.handleSelectedCountry }
                    label="Country"
                >
                    { countries.countries.map((country) => (
                        <MenuItem
                            key={ country.iso3 }
                            value={ country.name ? country.name : '' }
                        >
                                { country.name }
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}