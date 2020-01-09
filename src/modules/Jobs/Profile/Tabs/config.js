import React from 'react';

import { DownArrow, PointerArrow, Calendar } from '_assets/img';
import { Text } from '_components';
import { GREY_TEXT } from '_constants/colors';

import states from '_constants/states';
import employmentPositions from '_constants/employmentPositions';

function renderPlainIcon(Icon) {
  return <Icon />;
}

export default {
  personal: [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    {
      key: 'birthdate',
      label: 'Date of birth',
      type: 'date',
      renderIcon: function renderIconInRight() {
        return <Text style={{ fontSize: 11, color: GREY_TEXT }}>MM/DD/YY</Text>;
      }
    },
    { key: 'street', label: 'Street 1' },
    { key: 'street2', label: 'Street 2' },
    { key: 'city', label: 'City' },
    {
      key: 'state',
      label: 'State',
      type: 'select',
      items: states,
      renderIcon: () => renderPlainIcon(DownArrow)
    },
    { key: 'phone', label: 'Phone number' },
    { key: 'zip', label: 'Zip Code' }
  ],
  cdl: [
    { key: 'licenseId', label: 'CDL Number' },
    {
      key: 'licenseState',
      label: 'CDL State',
      type: 'select',
      items: states,
      renderIcon: () => renderPlainIcon(DownArrow)
    },
    {
      key: 'cdlStatus',
      label: 'CDL Status',
      type: 'select',
      renderIcon: () => renderPlainIcon(DownArrow),
      items: [
        { label: 'Active', value: 'active' },
        { label: 'Expired', value: 'expired' },
        { label: 'No CDL', value: 'noCdl' },
        { label: 'Suspended', value: 'suspended' },
        { label: 'Revoked', value: 'revoked' }
      ]
    },
    {
      key: 'jobStatus',
      label: 'Job Status',
      type: 'select',
      renderIcon: () => renderPlainIcon(DownArrow),
      items: [
        { label: 'Unemployed', value: 'unemployed' },
        { label: 'Employed - Part-time', value: 'partTime' },
        { label: 'Employed - Full-time', value: 'fullTime' },
        { label: 'Looking for my first job', value: 'lookingFirsst' },
        { label: 'Employed but have received notice', value: 'gaveNotice' }
      ]
    },
    {
      key: 'cdlClass',
      label: 'CDL Class',
      type: 'select',
      renderIcon: () => renderPlainIcon(DownArrow),
      items: [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'C', value: 'C' }
      ]
    },
    {
      key: 'endorsements',
      label: 'Endorsments',
      type: 'checkbox',
      items: [
        { key: 'H', label: 'Hazardous Materials (HAZMAT)' },
        { key: 'N', label: 'Tank Vehicle' },
        { key: 'P', label: 'Passenger Transport' },
        { key: 'S', label: 'School Bus/Passenger Transport' },
        { key: 'T', label: 'Double/Triples' },
        { key: 'X', label: 'Tanker and Hazardous Materials' }
      ]
    },
    {
      key: 'restrictions',
      label: 'Restrictions',
      type: 'checkbox',
      items: [
        { key: 'L', label: 'No Full Air Brake' },
        { key: 'Z', label: 'No Air Brake' },
        { key: 'E', label: 'No Manual Transmission' },
        { key: 'O', label: 'No Semi-Trailer' },
        { key: 'M', label: 'Passenger Vehicle Or School Bus Only' },
        { key: 'N', label: 'Class C Passenger Vehicle Or School Bus' },
        { key: 'K', label: 'Intrastate Only' },
        { key: 'V', label: 'Restriction-Medical Variance' }
      ]
    },
    {
      key: 'trafficIncidents',
      label: 'Traffic Incidents',
      type: 'formGroup',
      buttonTitle: 'Incident',
      groupLabel: 'Incident',
      items: [
        {
          label: 'Date',
          key: 'date',
          type: 'date'
        },
        {
          label: 'State',
          key: 'state',
          type: 'select',
          items: states,
          renderIcon: () => renderPlainIcon(DownArrow)
        },
        {
          label: 'Did this incident involve company property?',
          key: 'involvedProperty',
          type: 'radioButton',
          items: [
            {
              key: 'yes',
              label: 'Yes'
            },
            {
              key: 'no',
              label: 'No'
            }
          ]
        },
        {
          label: 'Incident Description',
          type: 'input',
          key: 'description',
          charLimit: 1000
        }
      ]
    }
  ],
  employment: [
    {
      key: 'jobHistory',
      label: 'Employment History',
      type: 'formGroup',
      buttonTitle: 'Employment History',
      groupLabel: 'Job',
      items: [
        {
          key: 'employer',
          label: 'Employer'
        },
        {
          key: 'position',
          label: 'Position',
          type: 'select',
          items: employmentPositions,
          renderIcon: () => renderPlainIcon(DownArrow)
        },
        {
          key: 'dateRange',
          type: 'dateRange',
          renderIcon: () => renderPlainIcon(Calendar),
          items: [
            {
              key: 'startDate',
              label: 'Start Date'
            },
            {
              key: 'endDate',
              label: 'End Date'
            }
          ]
        },
        {
          key: 'description',
          label: 'Job Description',
          charLimit: 1000
        }
      ]
    }
  ],
  other: [
    {
      key: 'miles',
      label: 'Search within:',
      min: 25,
      step: 1,
      max: 250,
      inverted: true,
      valType: ' Miles',
      type: 'slider'
    },
    {
      key: 'coordinates',
      label: 'Of:',
      type: 'placesAutoComplete',
      renderIcon: () => renderPlainIcon(PointerArrow)
    },
    {
      key: 'jobType',
      label: 'Job Types',
      type: 'checkbox',
      items: [
        {
          key: 'otr',
          label: 'OTR - Over the Road'
        },
        { key: 'regional', label: 'Regional' },
        { key: 'local', label: 'Local' },
        {
          key: 'intermodal',
          label: 'Intermodal'
        }
      ]
    },
    {
      key: 'employmentType',
      label: 'Employment',
      type: 'checkbox',
      items: [
        { key: 'fullTime', label: 'Full Time' },
        { key: 'partTime', label: 'Part Time' },
        { key: 'contract', label: 'Contract' },
        { key: 'temporary', label: 'Temporary' },
        { key: 'onCall', label: 'On Call' }
      ]
    },
    {
      key: 'minSalary',
      label: 'Minimum Salary:',
      min: 0,
      step: 1,
      max: 200,
      currency: '$',
      valType: '/k year',
      type: 'slider'
    },
    {
      key: 'minPerMile',
      label: 'Minimum per mile:',
      min: 0,
      step: 0.1,
      max: 5,
      decimalPlaces: true,
      currency: '$',
      valType: '/mile',
      type: 'slider'
    }
  ]
};
