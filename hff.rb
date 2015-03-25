require 'sinatra'
require 'sass/plugin/rack'


#set up sass
Sass::Plugin.options[:style] = :expanded
use Sass::Plugin::Rack

get '/'  do
	
	erb :index
end