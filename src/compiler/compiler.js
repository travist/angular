'use strict';"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var platform_directives_and_pipes_1 = require('angular2/src/core/platform_directives_and_pipes');
exports.PLATFORM_DIRECTIVES = platform_directives_and_pipes_1.PLATFORM_DIRECTIVES;
exports.PLATFORM_PIPES = platform_directives_and_pipes_1.PLATFORM_PIPES;
__export(require('angular2/src/compiler/template_ast'));
var template_parser_1 = require('angular2/src/compiler/template_parser');
exports.TEMPLATE_TRANSFORMS = template_parser_1.TEMPLATE_TRANSFORMS;
var config_1 = require('./config');
exports.CompilerConfig = config_1.CompilerConfig;
exports.RenderTypes = config_1.RenderTypes;
__export(require('./compile_metadata'));
__export(require('./offline_compiler'));
var runtime_compiler_1 = require('./runtime_compiler');
exports.RuntimeCompiler = runtime_compiler_1.RuntimeCompiler;
__export(require('angular2/src/compiler/url_resolver'));
__export(require('angular2/src/compiler/xhr'));
var view_resolver_1 = require('./view_resolver');
exports.ViewResolver = view_resolver_1.ViewResolver;
var directive_resolver_1 = require('./directive_resolver');
exports.DirectiveResolver = directive_resolver_1.DirectiveResolver;
var pipe_resolver_1 = require('./pipe_resolver');
exports.PipeResolver = pipe_resolver_1.PipeResolver;
var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var template_parser_2 = require('angular2/src/compiler/template_parser');
var html_parser_1 = require('angular2/src/compiler/html_parser');
var directive_normalizer_1 = require('angular2/src/compiler/directive_normalizer');
var runtime_metadata_1 = require('angular2/src/compiler/runtime_metadata');
var style_compiler_1 = require('angular2/src/compiler/style_compiler');
var view_compiler_1 = require('angular2/src/compiler/view_compiler/view_compiler');
var config_2 = require('./config');
var component_resolver_1 = require('angular2/src/core/linker/component_resolver');
var runtime_compiler_2 = require('angular2/src/compiler/runtime_compiler');
var element_schema_registry_1 = require('angular2/src/compiler/schema/element_schema_registry');
var dom_element_schema_registry_1 = require('angular2/src/compiler/schema/dom_element_schema_registry');
var url_resolver_2 = require('angular2/src/compiler/url_resolver');
var parser_1 = require('./expression_parser/parser');
var lexer_1 = require('./expression_parser/lexer');
var view_resolver_2 = require('./view_resolver');
var directive_resolver_2 = require('./directive_resolver');
var pipe_resolver_2 = require('./pipe_resolver');
function _createCompilerConfig() {
    return new config_2.CompilerConfig(lang_1.assertionsEnabled(), false, true);
}
/**
 * A set of providers that provide `RuntimeCompiler` and its dependencies to use for
 * template compilation.
 */
exports.COMPILER_PROVIDERS = lang_1.CONST_EXPR([
    lexer_1.Lexer,
    parser_1.Parser,
    html_parser_1.HtmlParser,
    template_parser_2.TemplateParser,
    directive_normalizer_1.DirectiveNormalizer,
    runtime_metadata_1.RuntimeMetadataResolver,
    url_resolver_2.DEFAULT_PACKAGE_URL_PROVIDER,
    style_compiler_1.StyleCompiler,
    view_compiler_1.ViewCompiler,
    new di_1.Provider(config_2.CompilerConfig, { useFactory: _createCompilerConfig, deps: [] }),
    runtime_compiler_2.RuntimeCompiler,
    new di_1.Provider(component_resolver_1.ComponentResolver, { useExisting: runtime_compiler_2.RuntimeCompiler }),
    dom_element_schema_registry_1.DomElementSchemaRegistry,
    new di_1.Provider(element_schema_registry_1.ElementSchemaRegistry, { useExisting: dom_element_schema_registry_1.DomElementSchemaRegistry }),
    url_resolver_2.UrlResolver,
    view_resolver_2.ViewResolver,
    directive_resolver_2.DirectiveResolver,
    pipe_resolver_2.PipeResolver
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVdDWExFb1o4LnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDhDQUFrRCxpREFBaUQsQ0FBQztBQUE1RixrRkFBbUI7QUFBRSx3RUFBdUU7QUFDcEcsaUJBQWMsb0NBQW9DLENBQUMsRUFBQTtBQUNuRCxnQ0FBa0MsdUNBQXVDLENBQUM7QUFBbEUsb0VBQWtFO0FBQzFFLHVCQUEwQyxVQUFVLENBQUM7QUFBN0MsaURBQWM7QUFBRSwyQ0FBNkI7QUFDckQsaUJBQWMsb0JBQW9CLENBQUMsRUFBQTtBQUNuQyxpQkFBYyxvQkFBb0IsQ0FBQyxFQUFBO0FBQ25DLGlDQUE4QixvQkFBb0IsQ0FBQztBQUEzQyw2REFBMkM7QUFDbkQsaUJBQWMsb0NBQW9DLENBQUMsRUFBQTtBQUNuRCxpQkFBYywyQkFBMkIsQ0FBQyxFQUFBO0FBRTFDLDhCQUEyQixpQkFBaUIsQ0FBQztBQUFyQyxvREFBcUM7QUFDN0MsbUNBQWdDLHNCQUFzQixDQUFDO0FBQS9DLG1FQUErQztBQUN2RCw4QkFBMkIsaUJBQWlCLENBQUM7QUFBckMsb0RBQXFDO0FBRTdDLHFCQUFrRCwwQkFBMEIsQ0FBQyxDQUFBO0FBQzdFLG1CQUFnQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3ZELGdDQUE2Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3JFLDRCQUF5QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQzdELHFDQUFrQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBQy9FLGlDQUFzQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBQy9FLCtCQUE0QixzQ0FBc0MsQ0FBQyxDQUFBO0FBQ25FLDhCQUEyQixtREFBbUQsQ0FBQyxDQUFBO0FBQy9FLHVCQUE2QixVQUFVLENBQUMsQ0FBQTtBQUN4QyxtQ0FBZ0MsNkNBQTZDLENBQUMsQ0FBQTtBQUM5RSxpQ0FBOEIsd0NBQXdDLENBQUMsQ0FBQTtBQUN2RSx3Q0FBb0Msc0RBQXNELENBQUMsQ0FBQTtBQUMzRiw0Q0FBdUMsMERBQTBELENBQUMsQ0FBQTtBQUNsRyw2QkFBd0Qsb0NBQW9DLENBQUMsQ0FBQTtBQUM3Rix1QkFBcUIsNEJBQTRCLENBQUMsQ0FBQTtBQUNsRCxzQkFBb0IsMkJBQTJCLENBQUMsQ0FBQTtBQUNoRCw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxtQ0FBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN2RCw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3QztJQUNFLE1BQU0sQ0FBQyxJQUFJLHVCQUFjLENBQUMsd0JBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUVEOzs7R0FHRztBQUNVLDBCQUFrQixHQUFtQyxpQkFBVSxDQUFDO0lBQzNFLGFBQUs7SUFDTCxlQUFNO0lBQ04sd0JBQVU7SUFDVixnQ0FBYztJQUNkLDBDQUFtQjtJQUNuQiwwQ0FBdUI7SUFDdkIsMkNBQTRCO0lBQzVCLDhCQUFhO0lBQ2IsNEJBQVk7SUFDWixJQUFJLGFBQVEsQ0FBQyx1QkFBYyxFQUFFLEVBQUMsVUFBVSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUMzRSxrQ0FBZTtJQUNmLElBQUksYUFBUSxDQUFDLHNDQUFpQixFQUFFLEVBQUMsV0FBVyxFQUFFLGtDQUFlLEVBQUMsQ0FBQztJQUMvRCxzREFBd0I7SUFDeEIsSUFBSSxhQUFRLENBQUMsK0NBQXFCLEVBQUUsRUFBQyxXQUFXLEVBQUUsc0RBQXdCLEVBQUMsQ0FBQztJQUM1RSwwQkFBVztJQUNYLDRCQUFZO0lBQ1osc0NBQWlCO0lBQ2pCLDRCQUFZO0NBQ2IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtQTEFURk9STV9ESVJFQ1RJVkVTLCBQTEFURk9STV9QSVBFU30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcGxhdGZvcm1fZGlyZWN0aXZlc19hbmRfcGlwZXMnO1xuZXhwb3J0ICogZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3RlbXBsYXRlX2FzdCc7XG5leHBvcnQge1RFTVBMQVRFX1RSQU5TRk9STVN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci90ZW1wbGF0ZV9wYXJzZXInO1xuZXhwb3J0IHtDb21waWxlckNvbmZpZywgUmVuZGVyVHlwZXN9IGZyb20gJy4vY29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL29mZmxpbmVfY29tcGlsZXInO1xuZXhwb3J0IHtSdW50aW1lQ29tcGlsZXJ9IGZyb20gJy4vcnVudGltZV9jb21waWxlcic7XG5leHBvcnQgKiBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvdXJsX3Jlc29sdmVyJztcbmV4cG9ydCAqIGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci94aHInO1xuXG5leHBvcnQge1ZpZXdSZXNvbHZlcn0gZnJvbSAnLi92aWV3X3Jlc29sdmVyJztcbmV4cG9ydCB7RGlyZWN0aXZlUmVzb2x2ZXJ9IGZyb20gJy4vZGlyZWN0aXZlX3Jlc29sdmVyJztcbmV4cG9ydCB7UGlwZVJlc29sdmVyfSBmcm9tICcuL3BpcGVfcmVzb2x2ZXInO1xuXG5pbXBvcnQge2Fzc2VydGlvbnNFbmFibGVkLCBUeXBlLCBDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtwcm92aWRlLCBQcm92aWRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuaW1wb3J0IHtUZW1wbGF0ZVBhcnNlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3RlbXBsYXRlX3BhcnNlcic7XG5pbXBvcnQge0h0bWxQYXJzZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9odG1sX3BhcnNlcic7XG5pbXBvcnQge0RpcmVjdGl2ZU5vcm1hbGl6ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9kaXJlY3RpdmVfbm9ybWFsaXplcic7XG5pbXBvcnQge1J1bnRpbWVNZXRhZGF0YVJlc29sdmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvcnVudGltZV9tZXRhZGF0YSc7XG5pbXBvcnQge1N0eWxlQ29tcGlsZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9zdHlsZV9jb21waWxlcic7XG5pbXBvcnQge1ZpZXdDb21waWxlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3ZpZXdfY29tcGlsZXIvdmlld19jb21waWxlcic7XG5pbXBvcnQge0NvbXBpbGVyQ29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge0NvbXBvbmVudFJlc29sdmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvY29tcG9uZW50X3Jlc29sdmVyJztcbmltcG9ydCB7UnVudGltZUNvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvcnVudGltZV9jb21waWxlcic7XG5pbXBvcnQge0VsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3NjaGVtYS9lbGVtZW50X3NjaGVtYV9yZWdpc3RyeSc7XG5pbXBvcnQge0RvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3NjaGVtYS9kb21fZWxlbWVudF9zY2hlbWFfcmVnaXN0cnknO1xuaW1wb3J0IHtVcmxSZXNvbHZlciwgREVGQVVMVF9QQUNLQUdFX1VSTF9QUk9WSURFUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3VybF9yZXNvbHZlcic7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSAnLi9leHByZXNzaW9uX3BhcnNlci9wYXJzZXInO1xuaW1wb3J0IHtMZXhlcn0gZnJvbSAnLi9leHByZXNzaW9uX3BhcnNlci9sZXhlcic7XG5pbXBvcnQge1ZpZXdSZXNvbHZlcn0gZnJvbSAnLi92aWV3X3Jlc29sdmVyJztcbmltcG9ydCB7RGlyZWN0aXZlUmVzb2x2ZXJ9IGZyb20gJy4vZGlyZWN0aXZlX3Jlc29sdmVyJztcbmltcG9ydCB7UGlwZVJlc29sdmVyfSBmcm9tICcuL3BpcGVfcmVzb2x2ZXInO1xuXG5mdW5jdGlvbiBfY3JlYXRlQ29tcGlsZXJDb25maWcoKSB7XG4gIHJldHVybiBuZXcgQ29tcGlsZXJDb25maWcoYXNzZXJ0aW9uc0VuYWJsZWQoKSwgZmFsc2UsIHRydWUpO1xufVxuXG4vKipcbiAqIEEgc2V0IG9mIHByb3ZpZGVycyB0aGF0IHByb3ZpZGUgYFJ1bnRpbWVDb21waWxlcmAgYW5kIGl0cyBkZXBlbmRlbmNpZXMgdG8gdXNlIGZvclxuICogdGVtcGxhdGUgY29tcGlsYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFUl9QUk9WSURFUlM6IEFycmF5PFR5cGUgfCBQcm92aWRlciB8IGFueVtdPiA9IENPTlNUX0VYUFIoW1xuICBMZXhlcixcbiAgUGFyc2VyLFxuICBIdG1sUGFyc2VyLFxuICBUZW1wbGF0ZVBhcnNlcixcbiAgRGlyZWN0aXZlTm9ybWFsaXplcixcbiAgUnVudGltZU1ldGFkYXRhUmVzb2x2ZXIsXG4gIERFRkFVTFRfUEFDS0FHRV9VUkxfUFJPVklERVIsXG4gIFN0eWxlQ29tcGlsZXIsXG4gIFZpZXdDb21waWxlcixcbiAgbmV3IFByb3ZpZGVyKENvbXBpbGVyQ29uZmlnLCB7dXNlRmFjdG9yeTogX2NyZWF0ZUNvbXBpbGVyQ29uZmlnLCBkZXBzOiBbXX0pLFxuICBSdW50aW1lQ29tcGlsZXIsXG4gIG5ldyBQcm92aWRlcihDb21wb25lbnRSZXNvbHZlciwge3VzZUV4aXN0aW5nOiBSdW50aW1lQ29tcGlsZXJ9KSxcbiAgRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LFxuICBuZXcgUHJvdmlkZXIoRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCB7dXNlRXhpc3Rpbmc6IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0pLFxuICBVcmxSZXNvbHZlcixcbiAgVmlld1Jlc29sdmVyLFxuICBEaXJlY3RpdmVSZXNvbHZlcixcbiAgUGlwZVJlc29sdmVyXG5dKTtcbiJdfQ==