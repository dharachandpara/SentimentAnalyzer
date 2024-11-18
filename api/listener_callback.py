#api/listener_callback.py

def handle_changes(col_snapshot, changes, read_time): #process snapshot changes
    for change in changes: #col_snapeshot = snapshot of the collection, changes = list of document changes, read_time = read time of the snapeshot
        if change.type.name == 'ADDED':
            print(f'Added: {change.document.to_dict()}')
        elif change.type.name == 'MODIFIED':
            print(f'Modified: {change.document.to_dict()}')
        elif change.type.name == 'REMOVED':
            print(f'Removed: {change.document.id}')