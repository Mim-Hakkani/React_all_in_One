import React from 'react';

const PassDataAsObject = ({ objData }) => {
	console.log('Ami object Data :: ', objData);

	const skillNames = Object.keys(objData);

	// console.log('keys',Object.keys(objData));
	return (
		<div>
			<h3>Skills List </h3>

			<dl>
				{skillNames.map((skillName) => (
					<>
						<dt>{skillName}</dt>
						{skillName === 'academic' &&
							objData.academic.map((academicSkill) => <dd>{academicSkill}</dd>)}

						{skillName === 'technical' &&
							objData.technical.map((technicalSkill) => (
								<dd>{technicalSkill}</dd>
							))}

						{skillName === 'other' && (
							<>
								<dd>{objData.other.play}</dd>
								<dd>{objData.other.entertainment}</dd>
							</>
						)}
					</>
				))}
			</dl>
		</div>
	);
};

export default PassDataAsObject;
