import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';

const ContributesForm = () => {
  const [formData, setFormData] = useState({
    Company: '',
    Role: '',
    Location: '',
    Type: '',
    Worktype: '',
    Skill: [],
    LastDate: '',
    Link: '',
    Grade: [],
    Description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      Skill: value,
    }));
  };

  const handleGradeChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      Grade: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here, like sending the data to a server
    console.log(formData);
  };

  return (
    <div style={{ width: '70vw', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Company"
              variant="standard"
              name="Company"
              value={formData.Company}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Role"
              variant="standard"
              name="Role"
              value={formData.Role}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Location"
              variant="standard"
              name="Location"
              value={formData.Location}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                name="Type"
                variant="standard"
                value={formData.Type}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
                <MenuItem value="Freelance">Freelance</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Worktype</InputLabel>
              <Select
                name="Worktype"
                variant="standard"
                value={formData.Worktype}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="Onsite">Onsite</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.Skill.includes('Skill 1')}
                    onChange={handleSkillChange}
                    value="Skill 1"
                  />
                }
                label="Skill 1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.Skill.includes('Skill 2')}
                    onChange={handleSkillChange}
                    value="Skill 2"
                  />
                }
                label="Skill 2"
              />
              {/* Add more skills */}
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="date"
              label="Last Date"
              variant="standard"
              name="LastDate"
              value={formData.LastDate}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Link"
              variant="standard"
              name="Link"
              value={formData.Link}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.Grade.includes('Grade A')}
                    onChange={handleGradeChange}
                    value="Grade A"
                  />
                }
                label="Grade A"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.Grade.includes('Grade B')}
                    onChange={handleGradeChange}
                    value="Grade B"
                  />
                }
                label="Grade B"
              />
              {/* Add more grades */}
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              variant="standard"
              name="Description"
              value={formData.Description}
              onChange={handleInputChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ContributesForm;
