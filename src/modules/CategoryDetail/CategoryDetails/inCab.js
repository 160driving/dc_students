export default [
  {
    title: 'Three Red Reflective Triangles',
    values: ['Not cracked or broken', 'Must stand their own'],
    image: 'threeRedReflectiveTriangles',
  },
  {
    title: 'Fire Extinguisher',
    values: [
      '10 BC or ABC',
      'Fully charged (Arrow on Green Filed at Gauge)',
      'Up to date',
      'Safety pin in place to avoid accidental discharge',
      `Within reach of driver or side box but have to be properly labeled "Fire Extinguisher Inside"`,
    ],
    image: 'fireExtinguisher',
  },
  {
    title: 'Fuse Panel',
    values: [
      'Spare fuses, one for every circuit of the vehicle unless breaker equipped',
    ],
    image: 'fusePanel',
  },
  {
    title: 'Seat/Safety Belt',
    values: [
      'Properly mounted, secured to vehicle',
      'Not cut, taped, frayed',
      'Adjustable and Retractable',
      'Latches and unlatches',
    ],
    image: 'safetySeatBelt',
  },
  {
    title: 'Horns: City and Air',
    values: ['Both must be working properly'],
    image: 'hornsCity',
  },
  {
    title: 'Heater and Defroster',
    values: ['Clear of all debris on dashboard', 'Working properly'],
    image: 'heaterDefroster',
  },
  {
    title: 'Wipers and Washers',
    values: [
      'Check that wiper on and blades are secure',
      'Not damaged and operating smoothly',
      'Proper tension to windshield',
      'Washers must work',
    ],
    image: 'wipersWashers',
  },
  {
    title: 'Windshields and Mirrors',
    values: [
      'Mirrors should be clean and adjusted from the inside properly',
      'Windshields should be clean, no illegal stickers',
      'No obstructions or damage to the glass',
    ],
    image: 'windshieldsMirrors',
  },
  {
    title: 'Voltmeter or Ammeter',
    values: ['Properly mounted, secured', 'Running approximetly 14 volts'],
    image: 'voltmeterAmmeter',
  },
  {
    title: 'Oil Pressure',
    values: [
      'Properly mounted, secured',
      'Idling 5-20 PSI',
      'Operating 35-75 PSI',
      'Warning light should be off',
    ],
    image: 'oilPressure',
  },
  {
    title: 'Water Gauge',
    values: [
      'Properly mounted, secured',
      'Operating in safe temp range(170-200) Fahrenheit',
      'Light should be off',
    ],
    image: 'waterGauge',
  },
  {
    title: 'Primary and Secondary Air Gauges',
    values: [
      'Properly mounted, secured',
      'Readable',
      'Warning light and buzzer off',
      'Within safe operating range: 100-120 PSI(GOV. cut in, cut out)',
    ],
    image: 'primarySecondaryAirGauges',
  },
  {
    title: 'Service Brake',
    values: [
      {
        title: `Drive forward, 3-5 MPH. Step on the clutch and brake. Vehicle should stop in a straight line. If it doesn't, cold be 5 problems`,
        innerValues: [
          '1. Brake out of adjustment',
          '2. Suspension problem',
          '3. Lower flat tire',
          '4. Uneven ground',
          '5. Shifted load',
        ],
      },
    ],
    image: 'serviceBrake',
  },
  {
    title: 'Applied test',
    values: [
      'Apply firm pressure to the brake pedal',
      'Shpuld not lose more than 4 PSI in on one minute in a combination vehicle',
      'Should not lose more than 3 PSI in one minute in a single vehicle',
    ],
    image: 'appliedTest',
  },
  {
    title: 'Fan Down 1',
    values: [
      'Warning light and buzzer on, at, or before 60 PSI-Low Air Pressure',
    ],
    image: 'fanDown1',
  },
  {
    title: 'Fan Down 2',
    values: [
      'Trailer valve pops between 45-20 PSI to prevent jackknife',
      'Tractor brake pops between 45-20 PSI',
      'Governor cuts in, 100 or less',
      'Governor cuts out, 120-125',
      'If Governor fails to cut out, the safety release shold open at 150',
    ],
    image: 'fanDown2',
  },
  {
    title: 'Safe Start',
    values: [
      'Make sure both springs or applied (out)',
      'Clutch to floor',
      'Verify stick is in neutral',
      'Key on',
      'Let gauges reset',
      'Start engine',
      {
        title: 'Check gauges',
        innerValues: [
          'Make sure they come to operating level',
          'Ease clutch out',
        ],
      },
    ],
    image: 'safeStart',
  },
];
