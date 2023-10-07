export default ({ env }) => ({
    ckeditor5: {
        enabled: true
    },
    seo: {
        enabled: true
    },
    'schemas-to-ts': {
        enabled: true,
        config: {
            acceptedNodeEnvs: ['development'],
            commonInterfacesFolderName: 'schemas-to-ts',
            verboseLogs: false,
            alwaysAddEnumSuffix: false
        }
    }
});
