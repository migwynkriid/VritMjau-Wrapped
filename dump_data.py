import json
from pathlib import Path

import pandas as pd


excel_path = Path('data/tablica.xlsx')
df = pd.read_excel(excel_path)
df = df.rename(columns=lambda c: str(c).strip())

records = []
for _, row in df.iterrows():
    records.append(
        {
            "date": row['Unnamed: 0'].strftime('%Y-%m-%d'),
            "values": {
                col: int(row[col]) for col in df.columns if col != 'Unnamed: 0'
            },
        }
    )

print(json.dumps(records, indent=2))
