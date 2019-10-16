export interface ICombinedRouteGroup {
  name: string;
  description: string;
  routeGroups: IRouteGroup[];
  rootRoute: string;
}

export interface IRouteGroup {
  name: string;
  nested: boolean;
  views: IRoute[];
}

export interface IRoute {
  name: string;
  route: string;
  exactMatch: boolean;
  description?: any;
}

export function createRouteGroup(groupParams) {
  const routeGroup = groupParams.categories.map((category) => {
    return { ...category, views: groupParams.components.filter((component) => component.category === category.name) };
  });

  if (groupParams.hasOverview && routeGroup[0].name === '') {
    routeGroup[0].views.unshift({
      name: 'Overview',
      route: groupParams.rootRoute,
      exactMatch: true,
    });
  }

  return routeGroup;
}
