import { routeBuilder, IScopedRouteBuilder } from '../../utilities/route-builder';

export const componentRouteCategories = [
  { name: '', nested: false, color: '' },
  { name: 'Layout', nested: false, color: 'blue-900' },
  { name: 'Buttons & Indicators', nested: false, color: 'pink-900' },
  { name: 'Navigation', nested: false, color: 'orange-900' },
  { name: 'Dialogs', nested: false, color: 'td-teal-900' },
  { name: 'Forms', nested: false, color: 'amber-900' },
  { name: 'Markdown', nested: false, color: 'deep-purple-900' },
  { name: 'Editors', nested: false, color: 'yellow-900' },
  { name: 'Formatting', nested: false, color: 'indigo-900' },
];

const [root, layout, buttons, nav, dialogs, forms, markdown, editors, formatting] = componentRouteCategories;

export const componentDetails: any = [
  {
    name: 'Breadcrumbs',
    id: 'breadcrumbs',
    description: 'Responsive navigation indicators',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'more_horiz',
    category: buttons.name,
    route: '/components/breadcrumbs',
    demo: () =>
      import('./component-demos/breadcrumbs/demos/breadcrumbs-demo.module').then((mod) => mod.BreadcrumbsDemoModule),
  },
  {
    name: 'Chips Autocomplete',
    id: 'chips',
    description: 'Field completion with chips',
    apiDocUrl: 'platform/core/chips/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'label',
    category: forms.name,
    route: '/components/chips',
    demo: () => import('./component-demos/chips/demos/chips-demo.module').then((mod) => mod.ChipsDemoModule),
  },
  {
    name: 'Code Editor',
    id: 'code-editor',
    description: 'Multi-language code editor with custom configurations',
    apiDocUrl: 'platform/code-editor/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'featured_play_list',
    category: editors.name,
    route: '/components/code-editor',
    demo: () =>
      import('./component-demos/code-editor/demos/code-editor-demo.module').then((mod) => mod.CodeEditorDemoModule),
  },
  {
    name: 'Simple Dialogs',
    id: 'dialogs',
    description: 'Quick way to use alert, confirm, prompt, and draggable dialogs',
    apiDocUrl: '' /* Needs MD file for dialogs. Doesn't exist currently */,
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'open_in_browser',
    category: dialogs.name,
    route: '/components/dialogs',
    demo: () => import('./component-demos/dialogs/demos/dialogs-demo.module').then((mod) => mod.DialogsDemoModule),
  },
  {
    name: 'Dynamic Forms',
    id: 'dynamic-forms',
    description: 'Build forms from a JS object',
    apiDocUrl: 'platform/dynamic-forms/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'format_align_center',
    category: forms.name,
    route: '/components/dynamic-forms',
    demo: () =>
      import('./component-demos/dynamic-forms/demos/dynamic-forms-demo.module').then(
        (mod) => mod.DynamicFormsDemoModule,
      ),
  },
  {
    name: 'File Input',
    id: 'file-input',
    description: 'Text input for files',
    apiDocUrl: 'platform/core/file/file-input/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'space_bar',
    category: buttons.name,
    route: '/components/file-input',
    demo: () =>
      import('./component-demos/file-input/demos/file-input-demo.module').then((mod) => mod.FileInputDemoModule),
  },
  {
    name: 'Flavored Markdown Parser',
    id: 'flavored-markdown',
    description: 'Parse and render markdown code with a Material Design flavor',
    apiDocUrl: 'platform/flavored-markdown/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'format_paint',
    category: markdown.name,
    route: '/components/flavored-markdown',
    demo: () =>
      import('./component-demos/flavored-markdown/demos/flavored-markdown-demo.module').then(
        (mod) => mod.FlavoredMarkdownDemoModule,
      ),
  },
  {
    name: 'Loading Mask',
    id: 'loading-mask',
    description: 'Mask areas for progressive loading',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'blur_linear',
    category: 'Buttons & Indicators',
    route: '/components/xyz',
  },
  {
    name: 'Syntax Highlight',
    id: 'highlight',
    description: 'Highlighting your code snippets',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'code',
    category: formatting.name,
    route: '/components/highlight',
    demo: () =>
      import('./component-demos/highlight/demos/highlight-demo.module').then((mod) => mod.HighlightDemoModule),
  },
  {
    name: 'JSON Formatter',
    id: 'json-formatter',
    description: 'JSON format it',
    apiDocUrl: 'platform/core/json-formatter/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'format_indent_increase',
    category: formatting.name,
    route: '/components/json-formatter',
    demo: () =>
      import('./component-demos/json-formatter/demos/json-formatter-demo.module').then(
        (mod) => mod.JsonFormatterDemoModule,
      ),
  },
  {
    name: 'Loading',
    id: 'loading',
    description: 'Circular or linear progress loader',
    apiDocUrl: 'platform/core/loading/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'hourglass_empty',
    category: buttons.name,
    route: '/components/loading',
    demo: () => import('./component-demos/loading/demos/loading-demo.module').then((mod) => mod.LoadingDemoModule),
  },
  {
    name: 'Markdown Parser',
    id: 'markdown-parser',
    description: 'Parse and render markdown code',
    apiDocUrl: 'platform/markdown/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'chrome_reader_mode',
    category: markdown.name,
    route: '/components/markdown-parser',
    demo: () => import('./component-demos/markdown/demos/markdown-demo.module').then((mod) => mod.MarkdownDemoModule),
  },
  {
    name: 'Markdown Navigator',
    id: 'markdown-navigator',
    description: 'A component for rendering and navigating through markdown, such as documentation.',
    apiDocUrl: 'platform/markdown-navigator/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'subject',
    category: markdown.name,
    route: '/components/markdown-navigator',
    demo: () =>
      import('./component-demos/markdown-navigator/demos/markdown-navigator-demo.module').then(
        (mod) => mod.MarkdownNavigatorDemoModule,
      ),
  },
  {
    name: 'Message',
    id: 'message',
    description: 'Info, warning & alert messages',
    apiDocUrl: 'platform/core/message/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'info_outline',
    category: buttons.name,
    route: '/components/message',
    demo: () => import('./component-demos/message/demos/message-demo.module').then((mod) => mod.MessageDemoModule),
  },
  {
    name: 'Paging',
    id: 'paging',
    description: 'Component used to paging within a dataset',
    apiDocUrl: 'platform/core/paging/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'swap_horiz',
    category: nav.name,
    route: '/components/paging',
    demo: () => import('./component-demos/paging/demos/paging-demo.module').then((mod) => mod.PagingDemoModule),
  },
  {
    name: 'Search',
    id: 'search',
    description: 'Component used to search data within a dataset',
    apiDocUrl: 'platform/core/search/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'search',
    category: buttons.name,
    route: '/components/search',
    demo: () => import('./component-demos/search/demos/search-demo.module').then((mod) => mod.SearchDemoModule),
  },
  {
    name: 'Data Table',
    id: 'data-table',
    description: 'Project tabular data',
    apiDocUrl: 'platform/core/data-table/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'view_array',
    category: layout.name,
    route: '/components/data-table',
    demo: () =>
      import('./component-demos/data-table/demos/data-table-demo.module').then((mod) => mod.DataTableDemosModule),
  },
  {
    name: 'Stepper',
    id: 'steps',
    description: 'A sequence of logical & numbered steps',
    apiDocUrl: 'platform/core/steps/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'view_array',
    category: layout.name,
    route: '/components/steps',
    demo: () => import('./component-demos/steps/demos/steps-demo.module').then((mod) => mod.StepsDemosModule),
  },
  {
    name: 'Sidesheet Content',
    id: 'sidesheet',
    description: 'Basic sidesheet content',
    apiDocUrl: 'platform/core/sidesheet/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'view_array',
    category: layout.name,
    route: '/components/sidesheet',
    demo: () =>
      import('./component-demos/sidesheet/demos/sidesheet-demo.module').then((mod) => mod.SidesheetDemoModule),
  },
  {
    name: 'Nav Steps',
    id: 'nav-steps',
    description:
      'Navigate across a sequence of logical & numbered steps (shrink width of page to see responsive behavior)',
    apiDocUrl: 'platform/core/steps/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'format_line_spacing',
    category: nav.name,
    route: '/components/nav-steps',
    demo: () => import('./component-demos/nav-steps/demos/nav-steps-demo.module').then((mod) => mod.NavStepsDemoModule),
  },
  {
    name: 'Notifications',
    id: 'notifications',
    description: 'Notification count & menu for toolbar',
    apiDocUrl: 'platform/core/notifications/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'notifications',
    category: buttons.name,
    route: '/components/notifications',
    demo: () =>
      import('./component-demos/notifications/demos/notifications-demo.module').then(
        (mod) => mod.NotificationsDemoModule,
      ),
  },
  {
    name: 'Tab Select',
    id: 'tab-select',
    description: 'Bind values to tabs and use them as filters',
    apiDocUrl: 'platform/core/tab-select/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'tab',
    category: forms.name,
    route: '/components/tab-select',
    demo: () =>
      import('./component-demos/tab-select/demos/tab-select-demo.module').then((mod) => mod.TabSelectDemoModule),
  },
  {
    name: 'Text Editor',
    id: 'text-editor',
    description: 'Simple markdown text editor component (edit the markdown in the left editor for a real-time preview)',
    apiDocUrl: 'platform/text-editor/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'keyboard',
    category: editors.name,
    route: '/components/text-editor',
    demo: () =>
      import('./component-demos/text-editor/demos/text-editor-demo.module').then((mod) => mod.TextEditorDemoModule),
  },
];

export const setComponentRoutes: IScopedRouteBuilder = routeBuilder(componentDetails);
