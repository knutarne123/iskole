module.exports = {
  someSidebar: [
    {
      type: 'doc',
      id: 'oversikt',
    },
    {
      type: 'doc',
      id: 'elev',
    },
    {
      type: 'category',
      label: 'Time- og fagfordeling',
      items: [
        'tf_klassefag',
        {
          Docs: ['tf_klassefag'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Timeplan',
      items: ['timeplan_blokknr', 'timeplan_klasse', 'tp_kopiering'],
    },
    {
      type: 'category',
      label: 'Emner',
      items: ['plagiatkontroll'],
    },
    {
      type: 'category',
      label: 'Docusaurus',
      items: ['doc1', 'doc2', 'doc3'],
    },
  ],
};
