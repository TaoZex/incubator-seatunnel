/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro/about',
        'intro/why',
        'intro/history',
      ],
    },
    {
      type: 'category',
      label: 'Quick Start',
      link: {
        type: 'generated-index',
        title: 'Quick Start for SeaTunnel',
        description: 'In this section, you could learn how to get up and running Apache SeaTunnel in both locally or in Docker environment.',
        slug: '/category/start',
        keywords: ['start'],
        image: '/img/favicon.ico',
      },
      items: [
        'start/local',
        'start/docker',
        'start/kubernetes'
      ],
    },
    {
      type: 'category',
      label: 'Concept',
      items: [
          'concept/config',
          'concept/connector-v2-features',
      ],
    },
      {
          type: 'category',
          label: 'Connector-V2',
          items: [
              {
                  type: 'category',
                  label: 'Status',
                  link: {
                        type: 'generated-index',
                        title: 'Connector-V2 Status',
                        description: 'Connector-V2 Status',
                        slug: '/category/connector-v2-status',
                        keywords: ['connector-v2-status'],
                        image: '/img/favicon.ico',
                    },
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'connector-v2/connector-health-state',
                        },  
                    ],
              },
              {
                  type: 'category',
                  label: 'Sink',
                  link: {
                      type: 'generated-index',
                      title: 'Sink-V2 of SeaTunnel',
                      description: 'List all Sink supported Apache SeaTunnel for now.',
                      // Should remove the `v2` suffix when we migrate all sink to v2 and delete the old one
                      slug: '/category/sink-v2',
                      keywords: ['sink'],
                      image: '/img/favicon.ico',
                  },
                  items: [
                      {
                          type: 'autogenerated',
                          dirName: 'connector-v2/sink',
                      },
                  ],
              },
              {
                  type: 'category',
                  label: 'Source',
                  link: {
                      type: 'generated-index',
                      title: 'Source-V2 of SeaTunnel',
                      description: 'List all source supported Apache SeaTunnel for now.',
                      // Should remove the `v2` suffix when we migrate all sink to v2 and delete the old one
                      slug: '/category/source-v2',
                      keywords: ['source'],
                      image: '/img/favicon.ico',
                  },
                  items: [
                      {
                          type: 'autogenerated',
                          dirName: 'connector-v2/source',
                      },
                  ],

              },
          ],
      },
    {
      type: 'category',
      label: 'Connector',
      items: [
        {
          type: 'category',
          label: 'Source',
          link: {
            type: 'generated-index',
            title: 'Source of SeaTunnel',
            description: 'List all source supported Apache SeaTunnel for now.',
            slug: '/category/source',
            keywords: ['source'],
            image: '/img/favicon.ico',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'connector/source',
            },
          ],
        },
        {
          type: 'category',
          label: 'Sink',
          link: {
            type: 'generated-index',
            title: 'Sink of SeaTunnel',
            description: 'List all sink supported Apache SeaTunnel for now.',
            slug: '/category/sink',
            keywords: ['sink'],
            image: '/img/favicon.ico',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'connector/sink',
            },
          ],
        },
        {
           type: 'category',
           label: 'flink-sql',
           link: {
             type: 'generated-index',
             title: 'Flink-sql of SeaTunnel',
             description: 'List all flink-sql supported Apache SeaTunnel for now.',
             slug: '/category/flink-sql',
             keywords: ['flink-sql'],
             image: '/img/favicon.ico',
           },
           items: [
             {
               type: 'autogenerated',
               dirName: 'connector/flink-sql',
             },
           ],
        },
      ],
    },
    {
        type: 'category',
        label: 'Transform',
        link: {
            type: 'generated-index',
            title: 'Transform of SeaTunnel',
            description: 'List all transform supported Apache SeaTunnel for now.',
            slug: '/category/transform',
            keywords: ['transform'],
            image: '/img/favicon.ico',
        },
        items: [
            {
                type: 'autogenerated',
                dirName: 'transform',
            },
        ],
    },
    {
      type: 'category',
      label: 'Command',
      items: [
        'command/usage',
      ],
    },
    'deployment',
    {
      type: 'category',
      label: 'Contribution',
      items: [
        'contribution/setup',
        'contribution/new-license',
        'contribution/coding-guide',
      ],
    },
    'faq',
  ]
};

module.exports = sidebars
