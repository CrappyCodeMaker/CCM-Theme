import { Token } from './types';

const baseTokens: Token[] = [
	{
		scope: ['comment'],
		settings: { foreground: ['neutral', 400] },
	},
	{
		scope: ['keyword'],
		settings: { foreground: ['violet', 400] },
	},
	{
		scope: ['storage.type'],
		settings: {
			foreground: ['violet', 400],
		},
	},
	{
		scope: ['entity.name.function'],
		settings: { foreground: ['blue', 400] },
	},
	{
		scope: ['constant.numeric'],
		settings: { foreground: ['orange', 400] },
	},
	{
		scope: ['string'],
		settings: { foreground: ['green', 400] },
	},
	{
		scope: ['support.type'],
		settings: { foreground: ['red', 400] },
	},
	{
		scope: ['entity.name.type'],
		settings: { foreground: ['magenta', 300] },
	},
	{
		scope: ['variable'],
		settings: { foreground: ['neutral', 200] },
	},
];

export const tokenCustomizations: Token[] = [
	...baseTokens,

	{
		scope: [
			'variable.parameter',
			'token.variable.parameter',
			'variable.other.jsdoc',
			'variable.language.arguments',
			'function.parameter',
			'entity.name.variable.parameter',
			'meta.function.c',
			'punctuation.vararg-ellipses',
			'variable.other.block.ruby',
			'meta.arguments',
			'entity.name.type.template',
		],
		settings: {
			foreground: ['yellow', 300],
		},
	},
	{
		scope: ['variable.parameter.url.css'],
		settings: {
			foreground: ['green', 400],
		},
	},
	{
		scope: ['variable.other.less', 'variable.other.sass', 'variable.scss', 'meta.function.calc.css', 'source.sass variable.other'],
		settings: {
			foreground: ['yellow', 300],
		},
	},
	{
		scope: [
			'variable.other.readwrite.alias',
			'entity.name.type.module',
			'entity.name.package',
			'variable.other',
			'support.variable',
			'meta.definition.variable',
			'variable.other.object',
			'variable.other.readwrite',
			'entity.name.type.enum',
			'meta.method.body',
			'entity.name.variable',
			'variable.other.object.property.cs',
			'meta.block.c',
			'source.c',
			'source.cpp',
			'source.ruby',
			'source.go',
			'meta.class-struct-block',
			'source.dart',
			'source.python',
			'meta.item-access.python',
			'meta.function-call.arguments.python',
			'meta.item-access.arguments.python',
			'variable.parameter.keyframe-list.css',
			'meta.property-value.css',
			'source.css.less',
		],
		settings: {
			foreground: ['neutral', 200],
		},
	},
	{
		scope: ['variable.other.property', 'variable.other.object.property', 'variable.other.constant.property'],
		settings: {
			foreground: ['blue', 300],
		},
	},
	{
		scope: [
			'punctuation.separator.key-value',
			'keyword.operator.type.annotation',
			'punctuation.definition.section.case-statement',
			'punctuation.separator.colon',
			'punctuation.separator.other',
			'punctuation.definition.parameters',
			'punctuation.definition.constant.ruby',
			'punctuation.separator.dictionary.key-value',
			'keyword.operator.ternary.dart',
			'punctuation.section.function.begin.python',
			'meta.property-list.css.sass',
			'sass-script-maps',
			'punctuation.colon',
			'punctuation.separator.initializers',
		],
		settings: {
			foreground: ['neutral', 200],
		},
	},
	{
		scope: ['keyword.operator.key.php'],
		settings: {
			foreground: ['blue', 200, 80],
		},
	},
	{
		scope: [
			'punctuation.separator.comma',
			'punctuation.separator.delimiter',
			'punctuation.separator.list.comma',
			'punctuation.separator.parameter',
			'meta.array.php',
			'punctuation.separator.parameters',
			'punctuation.separator.arguments.python',
			'punctuation.separator.object',
			'meta.function.method.with-arguments.ruby',
			'punctuation.comma',
			'punctuation.separator.element.python',
			'comment.punctuation.comma.sass',
			'meta.at-rule.keyframes.body.css',
			'meta.delimiter.object.comma',
		],
		settings: {
			foreground: ['neutral', 200],
		},
	},
	{
		scope: [
			'punctuation.terminator',
			'punctuation.terminator.statement',
			'punctuation.terminator.rule',
			'punctuation.terminator.expression',
			'punctuation.separator.statement',
			'meta.using-namespace-declaration.cpp',
			'invalid.deprecated.semicolon',
			'constant.character.end',
		],
		settings: {
			foreground: ['neutral', 200],
		},
	},
	{
		scope: [
			'punctuation.accessor',
			'punctuation.separator.period',
			'punctuation.separator.dot-access',
			'punctuation.separator.method',
			'punctuation.other.period',
			'punctuation.dot',
			'meta.delimiter.property.period',
		],
		settings: {
			fontStyle: 'bold',
			foreground: ['neutral', 200],
		},
	},
	{
		scope: ['meta.parameters.js'],
		settings: {
			foreground: ['neutral', 200],
		},
	},
	{
		scope: ['support.constant.font-name'],
		settings: {
			foreground: ['green', 400],
		},
	},
	{
		scope: ['support.constant.property-value.scss', 'support.constant.property-value.css', 'support.constant.vendored.property-value.css'],
		settings: {
			foreground: ['magenta', 300],
		},
	},
	{
		scope: ['punctuation.definition.template-expression.begin', 'punctuation.definition.template-expression.end'],
		settings: {
			foreground: ['blue', 400],
		},
	},
	{
		scope: [
			'meta.object-literal.key',
			'meta.object-literal.key string.quoted',
			'variable.object.property',
			'keyword.operator.optional',
			'support.type.map.key',
			'meta.at-rule.each.scss',
			'meta.property-value.scss',
		],
		settings: {
			fontStyle: 'italic',
			foreground: ['red', 400],
		},
	},
	{
		scope: [
			'keyword.operator.negation.regexp',
			'keyword.control.anchor.regexp',
			'punctuation.definition.group.capture.regexp',
			'keyword.operator.quantifier.regexp',
		],
		settings: {
			foreground: ['yellow', 300],
		},
	},
	{
		scope: [
			'support.variable.dom',
			'support.variable.property',
			'support.variable.property.dom',
			'storage.modifier.import',
			'constant.other.php',
			'variable.other.object.cs',
			'entity.name.type.namespace',
			'variable.other.member.c',
			'meta.using-namespace-declaration.cpp entity.name.type.cpp',
			'meta.class-struct-block.cpp meta.namespace-block.cpp entity.name.type.cpp',
			'variable.other.source.dart',
			'entity.name.namespace.cpp',
		],
		settings: {
			foreground: ['red', 400],
		},
	},
	{
		scope: ['keyword.operator.expression.typeof', 'keyword.other.typeof'],
		settings: {
			foreground: ['cyan', 600],
		},
	},
	{
		scope: ['keyword.operator.assignment', 'meta.property-value.css keyword.operator.less'],
		settings: {
			foreground: ['neutral', 200],
		},
	},
	{
		scope: [
			'punctuation.definition.tag',
			'meta.tag.inline.any',
			'meta.tag.block.any',
			'meta.tag.any',
			'meta.tag.structure.any',
			'meta.tag.metadata.script',
			'punctuation.definition.tag.begin',
			'punctuation.definition.tag.end',
			'meta.tag.preprocessor.xml',
			'punctuation.separator.key-value.html',
			'meta.tag.metadata.style.html',
			'meta.tag.attributes.js keyword.operator.assignment',
			'meta.tag.other.html',
			'meta.tag.inline.any.html source.directive.vue meta.brace',
			'punctuation.definition.tag.begin source.js',
			'punctuation.definition.tag.end source.js',
		],
		settings: {
			foreground: ['neutral', 300],
		},
	},
	{
		scope: [
			'keyword.operator',
			'keyword.operator.arithmetic',
			'keyword.operator.decrement',
			'keyword.operator.increment',
			'keyword.operator.assignment.compound',
			'keyword.operator.less',
			'meta.property-list.css',
			'keyword.operator.sass',
			'keyword.operator.increment-decrement',
			'keyword.operator.css',
			'entity.name.tag.wildcard.scss',
			'keyword.operator.string',
			'keyword.operator.bitwise',
			'keyword.operator.assignment.augmented',
			'storage.type.variable.ruby',
			'keyword.operator.assignment.arithmetic',
			'punctuation.definition.list.begin',
			'variable.language.import-all',
			'constant.language.import-export-all',
			'storage.modifier.reference',
			'storage.modifier.pointer',
		],
		settings: {
			foreground: ['cyan', 600],
		},
	},
	{
		scope: [
			'keyword.operator.ternary',
			'keyword.operator.logical',
			'keyword.operator.comparison',
			'keyword.operator.relational',
			'keyword.operator.or.regexp',
			'keyword.operator.class',
			'keyword.operator.type',
			'keyword.operator.other.ruby',
			'keyword.operator.conditional',
			'punctuation.separator.question-mark',
			'keyword.operator.null-coalescing',
			'punctuation.tilde',
			'punctuation.separator.pointer-access',
			'punctuation.separator.namespace',
			'keyword.operator.dart',
		],
		settings: {
			foreground: ['magenta', 400],
		},
	},
	{
		scope: ['keyword.operator.expression.instanceof', 'keyword.operator.instanceof'],
		settings: {
			foreground: ['magenta', 400],
		},
	},
	{
		scope: [
			'support.function',
			'meta.function-call',
			'support.function.construct.output',
			'invalid.deprecated.gradient.function.css',
			'invalid.deprecated.function.css',
			'support.function.console',
			'support.function.dom',
		],
		settings: {
			foreground: ['cyan', 600],
		},
	},
	{
		scope: ['variable.other.global.safer.php', 'variable.other.global.php'],
		settings: {
			foreground: ['yellow', 300],
		},
	},
	{
		scope: [
			'support.function.any-method.builtin.url',
			'support.function.any-method.builtin',
			'support.function.url',
			'support.function.misc',
			'support.function.transform',
			'support.function.calc',
			'support.function.var',
			'support.function.string',
			'support.function.basic_functions',
			'support.function.array',
			'support.function.construct',
			'support.function.datetime',
			'support.function.file',
			'support.function.network',
			'support.function.session',
			'support.function.mail',
			'support.function.filter',
			'support.function.errorfunc',
			'support.function.mysql',
			'support.function.php_odbc',
			'support.function.xml',
			'support.function.math',
		],
		settings: {
			foreground: ['blue', 400],
		},
	},
	{
		scope: ['entity.name.type.class'],
		settings: {
			foreground: ['magenta', 300],
		},
	},
	{
		scope: ['support.class'],
		settings: {
			foreground: ['blue', 400],
		},
	},
	{
		scope: ['support.class.console', 'support.class.component'],
		settings: {
			foreground: ['red', 300],
		},
	},
	{
		scope: ['support.class.builtin'],
		settings: {
			foreground: ['blue', 400],
		},
	},
	{
		scope: ['entity.name.class'],
		settings: {
			foreground: ['blue', 400],
		},
	},
	{
		scope: ['meta.method.declaration'],
		settings: {
			foreground: ['blue', 400],
		},
	},
	{
		scope: ['storage.type.function.arrow'],
		settings: {
			foreground: ['violet', 400],
		},
	},
	{
		scope: [
			'keyword.operator.new',
			'keyword.other.new',
			'storage.modifier.c',
			'keyword.control.directive.define',
			'keyword.control.def',
			'keyword.control.class',
			'keyword.control.directive.define punctuation.definition.directive',
			'keyword.control.module',
			'keyword.control.new',
			'keyword.preprocessor.define',
			'meta.preprocessor.cs punctuation.separator.hash.cs',
		],
		settings: {
			foreground: ['violet', 400],
		},
	},
	{
		scope: ['keyword.operator.expression.in', 'keyword.operator.expression.of'],
		settings: {
			foreground: ['magenta', 400],
		},
	},
	{
		scope: [
			'keyword.control',
			'keyword.other.using',
			'keyword.preprocessor.elif',
			'keyword.preprocessor.if',
			'keyword.preprocessor.else',
			'keyword.preprocessor.endif',
			'storage.modifier.extends',
			'keyword.control.directive',
			'punctuation.definition.directive',
			'punctuation.separator.hash',
			'storage.type.modifier',
			'keyword.control.export',
			'keyword.control.import',
			'keyword.control.at-rule.import.css',
			'keyword.control.at-rule.import.less',
			'keyword.control.at-rule.import.sass',
			'keyword.other.import',
			'keyword.import',
			'keyword.package',
			'keyword.control.flow',
			'keyword.other.special-method.ruby',
			'keyword.input',
			'keyword.type.graphql',
			'entity.name.function.definition.special.constructor.cpp',
			'keyword.cmake',
		],
		settings: {
			foreground: ['magenta', 400],
		},
	},
	{
		scope: ['keyword.control.from', 'entity.other.keyframe-offset'],
		settings: {
			foreground: ['magenta', 400],
		},
	},
	{
		scope: [
			'entity.name.function',
			'support.type.pthread',
			'entity.name.scope-resolution.function',
			'meta.block.class.cpp meta.body.class.cpp meta.block.class.cpp entity.name.function.definition.special.constructor.cpp',
		],
		settings: {
			foreground: ['blue', 400],
		},
	},
	{
		scope: [
			'keyword.other.package',
			'keyword.other.class',
			'keyword.other.namespace',
			'keyword.other.enum',
			'keyword.other.operator-decl',
			'keyword.other.interface',
			'keyword.preprocessor',
			'keyword.other.delegate',
			'storage.type.cpp',
			'storage.type.namespace',
			'storage.modifier',
			'storage.type.modifier.cpp',
			'storage.type.language.primitive.cpp',
			'storage.type.built-in.primitive.c',
			'storage.type.struct',
			'storage.type.template',
			'support.type.built-in.posix-reserved.pthread',
		],
		settings: {
			foreground: ['violet', 400],
		},
	},
	{
		scope: ['keyword.control.default'],
		settings: {
			foreground: ['magenta', 400],
		},
	},
	{
		scope: [
			'support.type.primitive',
			'support.type.builtin',
			'entity.name.type.instance',
			'entity.name.type.alias.ts',
			'storage.type.string',
			'storage.type.numeric',
			'storage.type.boolean',
			'storage.type.primitive',
			'meta.type.annotation',
			'meta.method.identifier',
			'meta.return.type',
			'meta.type.parameters',
			'keyword.interface',
			'storage.type.generic',
			'entity.name.type.interface',
			'entity.other.inherited-class',
			'storage.type.cs',
			'entity.name.type.struct',
			'keyword.type',
			'entity.name.type.type-parameter',
			'storage.type.object.array',
			'storage.type.java',
			'entity.name.type.delegate',
			'storage.type.c',
			'support.class.dart',
			'meta.declaration.dart',
			'meta.type.declaration',
			'meta.block.ts',
			'meta.class-struct-block.cpp entity.name.type.cpp',
			'support.type.graphql',
			'meta.function.definition.parameters storage.type.built-in.primitive.c',
			'meta.function.definition.parameters.cpp storage.type.language.primitive.cpp',
			'meta.function.definition.parameters.cpp storage.type.struct.cpp',
			'meta.function.constructor.cpp storage.type.language.primitive.cpp',
			'storage.type.template.argument',
		],
		settings: {
			foreground: ['magenta', 300],
		},
	},
	{
		scope: ['entity.name.type.js', 'new.expr.ts'],
		settings: {
			foreground: ['blue', 400],
		},
	},
	{
		scope: ['string', 'punctuation.definition.string.begin.html', 'punctuation.definition.string.end.html'],
		settings: {
			foreground: ['green', 400],
		},
	},
	{
		scope: ['constant.language', 'constant.language.boolean', 'keyword.operator.expression.void', 'constant.language.json'],
		settings: {
			fontStyle: 'italic bold',
			foreground: ['violet', 500],
		},
	},
	{
		scope: [
			'constant.numeric',
			'keyword.other.unit',
			'support.constant.dom',
			'constant.other.character-class.regexp',
			'meta.attribute.id.html entity.other.attribute-name.html',
			'entity.other.attribute-name.id',
			'support.constant.math',
			'support.constant.property.math',
			'support.constant.ext',
			'support.constant.core',
			'variable.other.enummember',
			'constant.other.enum',
			'entity.name.variable.enum-member',
			'entity.name.variable.preprocessor.symbol',
			'entity.name.function.preprocessor.c',
			'entity.other.keyframe-offset.percentage.css',
			'variable.other.constant',
			'constant.other.js',
		],
		settings: {
			foreground: ['orange', 400],
		},
	},
	{
		scope: ['beginning.punctuation.definition.quote'],
		settings: {
			foreground: ['blue', 400],
		},
	},
	{
		scope: ['fenced_code.block.language'],
		settings: {
			fontStyle: 'italic',
			foreground: ['red', 400],
		},
	},
	{
		scope: ['entity.name.tag', 'punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
		settings: {
			foreground: ['red', 400],
		},
	},
	{
		scope: [
			'text.html.basic',
			'text.html',
			'meta.paragraph',
			'text.html.php',
			'text.html.derivative',
			'text.html.wxml',
			'text.xml',
			'text.html',
			'source.js',
			'source.ignore',
			'source.nginx',
			'text',
		],
		settings: {
			foreground: ['neutral', 200],
		},
	},
	{
		scope: ['meta.jsx.children'],
		settings: {
			foreground: ['neutral', 200],
		},
	},
	{
		scope: [
			'punctuation.section.block.begin.bracket',
			'punctuation.section.block.end.bracket',
			'punctuation.definition.block',
			'punctuation.section.embedded.begin',
			'punctuation.section.embedded.end',
			'meta.brace',
			'punctuation.bracket',
			'punctuation.definition.parameters.ruby',
			'punctuation.definition.parameters.begin',
			'punctuation.definition.parameters.end',
			'punctuation.section.function.begin.bracket',
			'punctuation.section.function.end.bracket',
			'punctuation.definition.typeparameters.begin',
			'punctuation.definition.typeparameters.end',
			'punctuation.section.array.end',
			'punctuation.section.array.begin',
			'punctuation.definition.array.end',
			'punctuation.definition.array.begin',
			'punctuation.section.scope.end',
			'punctuation.section.scope.begin',
			'meta.parameter.object-binding-pattern',
			'punctuation.definition.binding-pattern.object',
			'punctuation.definition.arguments.end',
			'punctuation.definition.arguments.begin',
			'punctuation.definition.begin.bracket',
			'punctuation.definition.end.bracket',
			'punctuation.curlybrace.open',
			'punctuation.curlybrace.close',
			'punctuation.parenthesis.open',
			'punctuation.parenthesis.close',
			'punctuation.squarebracket.open',
			'punctuation.squarebracket.close',
			'punctuation.section.method.begin',
			'punctuation.section.method.end',
			'punctuation.section.class.begin',
			'punctuation.section.class.end',
			'punctuation.section.enum.begin',
			'punctuation.section.enum.end',
			'punctuation.section.parameters.begin.bracket',
			'punctuation.section.parameters.end.bracket',
			'punctuation.section.parens.begin.bracket',
			'punctuation.section.parens.end.bracket',
			'punctuation.section.arguments.begin.bracket',
			'punctuation.section.arguments.end.bracket',
			'punctuation.separator.arguments',
			'punctuation.section.function.ruby',
			'punctuation.definition.dictionary.begin',
			'punctuation.definition.dictionary.end',
			'punctuation.separator.dictionary.pair',
			'punctuation.separator.array',
			'punctuation.definition.map.begin.bracket',
			'punctuation.definition.map.end.bracket',
			'punctuation.section.function',
			'punctuation.definition.parameters.end.bracket',
			'punctuation.definition.parameters.begin.bracket',
			'punctuation.section.property-list.begin.bracket',
			'punctuation.section.property-list.end.bracket',
			'punctuation.definition.list.begin',
			'punctuation.definition.list.end',
			'punctuation.definition.binding-pattern.array',
			'punctuation.section.embedded.end.ruby source.ruby',
			'punctuation.section.embedded.begin.ruby source.ruby',
			'source.cs',
			'punctuation.definition.generic.begin.html',
			'punctuation.definition.generic.end.html',
			'punctuation.definition.function.body.begin.bracket',
			'punctuation.definition.function.body.end.bracket',
			'punctuation.definition.modules.begin',
			'punctuation.definition.modules.end',
			'constant.character.brace',
			'punctuation.operation.graphql',
			'punctuation.definition.optional.arguments.begin',
			'punctuation.definition.optional.arguments.end',
			'punctuation.definition.brackets',
			'punctuation.math.begin.bracket',
			'punctuation.math.end.bracket',
			'punctuation.section.angle-brackets',
			'keyword.operator.delete.array.bracket',
		],
		settings: {
			foreground: ['neutral', 200],
		},
	},
	{
		scope: [
			'meta.brace.round.css',
			'punctuation.section.property-list.begin.bracket.curly.css',
			'punctuation.section.property-list.end.bracket.curly.css',
			'punctuation.section.function.begin.bracket.round.css',
			'punctuation.section.function.end.bracket.round.css',
			'punctuation.section.media.begin.bracket.curly.css',
			'punctuation.section.media.end.bracket.curly.css',
			'punctuation.definition.parameters.begin.bracket.round.css',
			'punctuation.definition.parameters.end.bracket.round.css',
			'punctuation.section.keyframes.begin.bracket.curly.css',
			'punctuation.section.keyframes.end.bracket.curly.css',
		],
		settings: {
			foreground: ['neutral', 200],
		},
	},
	{
		scope: [
			'support.constant.color.w3c-standard-color-name',
			'constant.other.color.rgb-value.hex',
			'constant.other.rgb-value',
			'support.constant.color.w3c-extended-color-name.css',
		],
		settings: {
			foreground: ['neutral', 200],
		},
	},
	{
		scope: [
			'support.type.property-name.css',
			'support.type.vendored.property-name.css',
			'meta.at-rule.each.scss support.constant.property-value.css',
			'source.css.scss',
			'entity.name.tag.css',
		],
		settings: {
			foreground: ['blue', 300, 80],
		},
	},
	{
		scope: ['entity.other.attribute-name', 'invalid.deprecated.entity.other.attribute-name'],
		settings: {
			foreground: ['cyan', 600],
		},
	},
	{
		scope: ['entity.other.attribute-name.class.mixin'],
		settings: {
			foreground: ['blue', 400],
		},
	},
	{
		scope: [
			'entity.other.attribute-name.class.css',
			'selector.sass',
			'entity.other.attribute-name.parent-selector.css',
			'meta.at-rule.extend.scss',
		],
		settings: {
			foreground: ['green', 400],
		},
	},
	{
		scope: ['entity.other.attribute-name.pseudo-class.css', 'support.type.property-name.media.css', 'support.constant.media.css'],
		settings: {
			foreground: ['cyan', 600],
		},
	},
	{
		scope: ['entity.other.attribute-name.pseudo-element.css'],
		settings: {
			foreground: ['red', 400],
		},
	},

	{
		scope: ['beginning.punctuation.definition.list', 'beginning.punctuation.definition.quote'],
		settings: {
			foreground: ['blue', 400],
		},
	},
	{
		scope: ['string.other.link.title', 'string.other.link.description'],
		settings: {
			foreground: ['blue', 400],
		},
	},

	{
		scope: ['string.regexp'],
		settings: {
			foreground: ['green', 400],
		},
	},
	{
		scope: ['keyword.other'],
		settings: {
			foreground: ['red', 400],
		},
	},
	{
		scope: ['constant.character.escape'],
		settings: {
			foreground: ['cyan', 600],
		},
	},
	{
		scope: ['invalid', 'invalid.illegal', 'invalid.illegal.expected-dictionary-separator.json', 'invalid.broken', 'invalid.deprecated'],
		settings: {
			fontStyle: 'italic bold underline',
			foreground: ['red', 600],
		},
	},
	{
		scope: ['source.json meta.structure.dictionary.json > string.quoted.json'],
		settings: {
			foreground: ['red', 400],
		},
	},
	{
		scope: [
			'source.json meta.structure.dictionary.json > value.json > string.quoted.json',
			'source.json meta.structure.array.json > value.json > string.quoted.json',
			'source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation',
			'source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
		],
		settings: {
			foreground: ['green', 400],
		},
	},
	{
		scope: ['support.type.property-name.json'],
		settings: {
			foreground: ['red', 400],
		},
	},
	{
		scope: [
			'variable.language.self',
			'variable.language.this',
			'variable.language.super',
			'variable.language.special.self.python',
			'variable.language.dart',
			'keyword.operator.delete',
			'keyword.operator.expression.delete',
		],
		settings: {
			fontStyle: 'italic bold',
			foreground: ['orange', 300],
		},
	},
	{
		scope: ['token.info-token'],
		settings: {
			fontStyle: 'italic bold',
			foreground: ['blue', 500],
		},
	},
	{
		scope: ['token.warn-token'],
		settings: {
			fontStyle: 'italic bold',
			foreground: ['yellow', 500],
		},
	},
	{
		scope: ['token.error-token'],
		settings: {
			fontStyle: 'italic bold',
			foreground: ['red', 500],
		},
	},
	{
		scope: ['token.debug-token', 'keyword.other.debugger'],
		settings: {
			fontStyle: 'italic bold',
			foreground: ['magenta', 500],
		},
	},
	{
		scope: [
			'meta.var.expr',
			'storage.type.function',
			'keyword.function',
			'keyword.var',
			'keyword.const',
			'keyword.channel',
			'keyword.struct',
			'keyword.other.struct',
			'keyword.map',
			'keyword.reserved',
			'storage.type.class',
			'storage.type.php',
			'storage.type.interface',
			'storage.type.object',
			'storage.type.primitive.dart',
			'keyword.declaration',
			'keyword.operator.closure.dart',
			'storage.type.enum',
			'storage.type.type',
			'keyword.control.at-rule.function',
			'keyword.control.at-rule.mixin',
			'storage.type.const',
		],
		settings: {
			foreground: ['violet', 400],
		},
	},
	{
		scope: ['punctuation.definition.block.tag.jsdoc', 'storage.type.class.jsdoc', 'keyword.control.at-rule.keyframes.css'],
		settings: {
			foreground: ['violet', 400],
		},
	},
	{
		scope: ['support.module.node.js', 'support.type.object.module.js', 'support.type.object.module.ts', 'support.module.node.ts'],
		settings: {
			foreground: ['violet', 400],
		},
	},
	{
		scope: ['markup.bold', 'punctuation.definition.bold'],
		settings: {
			foreground: ['yellow', 300],
		},
	},
	{
		scope: ['comment.markup.link', 'punctuation.definition.comment', 'markup.quote'],
		settings: {
			fontStyle: 'italic',
			foreground: ['neutral', 400],
		},
	},
	{
		scope: ['entity.name.section', 'markup.heading', 'punctuation.definition.heading'],
		settings: {
			foreground: ['red', 400],
		},
	},
	{
		scope: ['markup.italic', 'punctuation.definition.italic'],
		settings: {
			fontStyle: 'italic',
			foreground: ['magenta', 300],
		},
	},
	{
		scope: ['markup.inline.raw'],
		settings: {
			foreground: ['green', 400],
		},
	},
	{
		scope: ['markup.underline.link', 'markup.underline.link.image', 'punctuation.definition.metadata'],
		settings: {
			foreground: ['blue', 300],
		},
	},
	{
		scope: [
			'markup.inline.raw.string',
			'punctuation.definition.raw',
			'markup.fenced_code.block',
			'markup.fenced_code.block punctuation',
			'markup.raw.block',
		],
		settings: {
			foreground: ['violet', 300],
		},
	},
	{
		scope: ['markup.underline'],
		settings: {
			fontStyle: 'underline',
		},
	},
	{
		scope: ['markup.strikethrough'],
		settings: {
			fontStyle: 'strikethrough',
		},
	},
];
