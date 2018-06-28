const _ = require ('lodash'),
	{ Pool, Client } = require('pg'),
	{ postgres_client } = require('.../config'),
	fs = require('file-system');


interface Column {
	name :string;
	type :string;
	sql_name :string;
	sql_type :string;
	required :boolean;
	default? :any;
	references? :string;
	validate :Function;
}

interface Model {
	name :string;
	columns :Array<Column>;
	validate_create :Function;
	validate_update :Function;
	validate_find :Function;
	create :Function;
	update :Function;
	find :Function;
	find_one :Function;
	delete :Function;
}

interface QueryBuilder {
	create :Function;
	update :Function;
	find :Function;
	delete :Function;
}

class PostGrass {
	constructor(postgres_client :object, models_location :string) {
		fs.recurse()
	}
}

module.exports = {
}