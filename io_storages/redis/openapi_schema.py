from drf_yasg import openapi

_common_redis_storage_schema_properties = {
    'title': openapi.Schema(type=openapi.TYPE_STRING, description='Storage title'),
    'description': openapi.Schema(type=openapi.TYPE_STRING, description='Storage description'),
    'project': openapi.Schema(type=openapi.TYPE_INTEGER, description='Project ID'),
    'path': openapi.Schema(type=openapi.TYPE_STRING, description='Storage prefix (optional)'),
    'host': openapi.Schema(type=openapi.TYPE_STRING, description='Server Host IP (optional)'),
    'port': openapi.Schema(type=openapi.TYPE_STRING, description='Server Port (optional)'),
    'password': openapi.Schema(type=openapi.TYPE_STRING, description='Server Password (optional)'),
}


_redis_import_storage_schema = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    properties=dict(
        regex_filter=openapi.Schema(
            type=openapi.TYPE_STRING,
            description='Cloud storage regex for filtering objects. '
            'You must specify it otherwise no objects will be imported.',
        ),
        use_blob_urls=openapi.Schema(
            type=openapi.TYPE_BOOLEAN,
            description='Interpret objects as BLOBs and generate URLs. For example, if your bucket contains images, '
            'you can use this option to generate URLs for these images. '
            'If set to False, it will read the content of the file and load it into Label Studio.',
            default=False,
        ),
        **_common_redis_storage_schema_properties,
    ),
    required=[],
)

_redis_import_storage_schema_with_id = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    properties=dict(
        id=openapi.Schema(
            type=openapi.TYPE_INTEGER, description='Storage ID. If set, storage with specified ID will be updated'
        ),
        **_redis_import_storage_schema.properties,
    ),
    required=[],
)


_redis_export_storage_schema = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    properties=dict(
        db=openapi.Schema(type=openapi.TYPE_INTEGER, description='Database ID of database to use'),
        can_delete_objects=openapi.Schema(type=openapi.TYPE_BOOLEAN, description='Deletion from storage enabled.'),
        **_common_redis_storage_schema_properties,
    ),
    required=[],
)

_redis_export_storage_schema_with_id = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    properties=dict(
        id=openapi.Schema(
            type=openapi.TYPE_INTEGER, description='Storage ID. If set, storage with specified ID will be updated'
        ),
        **_redis_export_storage_schema.properties,
    ),
    required=[],
)
