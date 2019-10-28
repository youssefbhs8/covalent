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
];

const [root, layout, buttons, nav, dialogs, forms, markdown, editors] = componentRouteCategories;

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
  },
  {
    name: 'Loading Mask',
    id: 'loading-mask',
    description:
      'Animated mask for multiple uses on loading states asoudhasiudhausihdiasuhdiuashdiu suad asiud haisud aisu',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'blur_linear',
    category: 'Buttons & Indicators',
    route: '/components/xyz',
  },
  {
    name: 'Highlight',
    id: 'highlight',
    description: 'Hightlight it',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: '',
    route: '/components/highlight',
    demos: [],
  },
  {
    name: 'JSON Formatter',
    id: 'json-formatter',
    description: 'JSON format it',
    apiDocUrl: 'platform/core/json-formatter/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: '',
    route: '/components/json-formatter',
    demos: [],
  },
  {
    name: 'Loading',
    id: 'loading',
    description: 'loading',
    apiDocUrl: 'platform/core/loading/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: buttons.name,
    route: '/components/loading',
    demos: [],
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
  },
];

export const setComponentRoutes: IScopedRouteBuilder = routeBuilder(componentDetails);
